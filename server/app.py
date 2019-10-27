import os
import pandas as pd
import requests

import bigdata

from bs4 import BeautifulSoup
from clientpy4.fhirclient import client
from clientpy4.fhirclient.models import observation as obs
from clientpy4.fhirclient.models import patient as p
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

class MedicareApi:
    CLAIMS_ENDPOINT = "https://data.cms.gov/views/INLINE/rows.json?accessType=WEBSITE&method=getByIds&asHashes=true&start=0&length=100&meta=true&$order=%3Aid"

    def __init__(self):
        self.claims_data = None

    def warmup(self):
        if not self.claims_data:
            self._get_claims_data()

    def reset(self):
        self.claims_data = None

    def get_claims(self):
        if not self.claims_data:
            self._get_claims_data()
        return [
            {
                'ClaimType': claim.get('203220005'),
                'AverageSubmittedChargeAmount': self._currency(claim.get('203220011')),
                'AverageMedicarePaymentAmount': self._currency(claim.get('203220013')),
            } for claim in self.claims_data['data']
        ]
        return self.claims_data

    def _currency(self, currency_as_string):
        try:
            return int(float(currency_as_string) * 100) / 100.0
        except:
            return 0.0

    def _get_claims_data(self):
        self.claims_data = requests.post(self.CLAIMS_ENDPOINT, json=bigdata.medicare_claims).json()


class FhirApi:
    loinc_codes = {
        # Fasting Blood Sugar
        '15074-8': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectivePeriod'),
            'value': l.get('valueQuantity')},
        # Body Weight / BMI
        '3141-9': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectiveDateTime'),
            'value': l.get('valueQuantity')},
        # Blood Pressure
        '85354-9': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectiveDateTime'),
            'value': [
                l.get('component', [{},{}])[0].get('valueQuantity', {}),
                l.get('component', [{},{}])[1].get('valueQuantity', {}),
            ]},
        # HDL
        '2085-9': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectiveDateTime'),
            'value': l.get('valueQuantity')},
        # Height
        '8302-2': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectiveDateTime'),
            'value': l.get('valueQuantity')},
        # BMI
        '39156-5': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectiveDateTime'),
            'value': l.get('valueQuantity')},
        # A1C
        '4548-4': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectiveDateTime'),
            'value': l.get('valueQuantity')},
        # Steps
        '55423-8': lambda l: {
            'code': l.get('code'),
            'date': l.get('effectiveDateTime'),
            'patient': l.get('subject', {}).get('reference', ''),
            'value': l.get('valueQuantity')},
        'default': lambda l: l,
    }

    def __init__(self, api_base):
        self.smart = client.FHIRClient(settings={
            'app_id': 'hackhlth2019',
            'api_base': api_base,
        })

    def get_patient(self, patient_id):
        search = p.Patient.read(patient_id, self.smart.server)
        return search.as_json()

    def get_observation(self, loinc):
        search = obs.Observation.where({ "code": loinc })
        results = search.perform_resources(self.smart.server)
        raw_data = [item.as_json() for item in results]
        return [self.loinc_codes.get(loinc, self.loinc_codes['default'])(i) for i in raw_data]

    def get_steps(self, patient_id):
        loinc = "55423-8"
        search = obs.Observation.where({ "code": loinc })
        results = search.perform_resources(self.smart.server)
        raw_data = [item.as_json() for item in results]
        all_steps = [self.loinc_codes.get(loinc, self.loinc_codes['default'])(i) for i in raw_data]
        return [step for step in all_steps if patient_id in step['patient']]

    def write_steps(self, patient_id, yyyy_MM_dd, step_count):
        steps_blob = {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                "coding": [
                    {
                    "system": "https://snomed.info.sct",
                    "code": "68130003",
                    "display": "Physical activity (observable entity)"
                    }
                ]
                }
            ],
            "code": {
                "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "55423-8",
                    "display": "Number of steps in unspecified time Pedometer"
                }
                ]
            },
            "subject": {
                "reference": "Patient/" + patient_id
            },
            "effectiveDateTime": yyyy_MM_dd,
            "valueQuantity": {
                "value": step_count,
                "unit": "steps",
                "system": "http://unitsofmeasure.org",
                "code": "{steps}/{tot}"
            }
        }
        steps_obj = obs.Observation(steps_blob).create(self.smart.server)
        return steps_obj

    def patients(self):
        search = p.Patient.where(struct={})
        patients_results = search.perform_resources(self.smart.server)
        return [patient.as_json() for patient in patients_results]

class SdhApi:
    FOODSTAMP_DATA_SOURCE= "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:41,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"
    POVERTY_DATA_SOURCE  = "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:52,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"
    PARK_ACCESS_DATA_SOURCE = "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:61,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"
    DIABETES_DATA_SOURCE = "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:62,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"
    OBESITY_DATA_SOURCE  = "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:63,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"
    INACTIVE_DATA_SOURCE = "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:64,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"
    HOUSING_PROBLEM_DATA_SOURCE = "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:74,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"
    def __init__(self):
        self.sdh_data = None

    def warmup(self):
        if not self.sdh_data:
            self._get_sdh_data()

    def reset(self):
        self.sdh_data = None

    def get_sdh(self, filter_fn):
        if not self.sdh_data:
            self._get_sdh_data()

        return list(filter(filter_fn, self.sdh_data))

    def _get_sdh_data(self):
        # Obesity Data
        dict_data = self._load_and_convert_table(self.OBESITY_DATA_SOURCE)
        obesity_data = [{
            'State': d['State'],
            'County': d['County'],
            'Obesity': d['Value'],
        } for d in dict_data]

        # Diabetes Data
        dict_data = self._load_and_convert_table(self.DIABETES_DATA_SOURCE)
        diabetes_data = [{
            'State': d['State'],
            'County': d['County'],
            'Diabetes': d['Value'],
        } for d in dict_data]

        # Inactive Data
        dict_data = self._load_and_convert_table(self.INACTIVE_DATA_SOURCE)
        inactive_data = [{
            'State': d['State'],
            'County': d['County'],
            'Inactive': d['Value'],
        } for d in dict_data]

        # Poverty Data
        dict_data = self._load_and_convert_table(self.POVERTY_DATA_SOURCE)
        poverty_data = [{
            'State': d['State'],
            'County': d['County'],
            'Poverty': d['Value'],
        } for d in dict_data]

        # Foodstamp / SNAP Data
        dict_data = self._load_and_convert_table(self.FOODSTAMP_DATA_SOURCE)
        foodstamp_data = [{
            'State': d['State'],
            'County': d['County'],
            'Foodstamp': d['Value'],
        } for d in dict_data]

        # Park Access Data
        dict_data = self._load_and_convert_table(self.PARK_ACCESS_DATA_SOURCE)
        park_access_data = [{
            'State': d['State'],
            'County': d['County'],
            'ParkAccess': d['Value'],
        } for d in dict_data]

        # Severe Housing Problem Data
        dict_data = self._load_and_convert_table(self.HOUSING_PROBLEM_DATA_SOURCE)
        housing_data = [{
            'State': d['State'],
            'County': d['County'],
            'SevereHousingShortage': d['Value'],
        } for d in dict_data]

        # Convert to single table
        diabetes = pd.DataFrame(diabetes_data)
        obesity  = pd.DataFrame(obesity_data)
        inactive = pd.DataFrame(inactive_data)
        poverty  = pd.DataFrame(poverty_data)
        foodstamp = pd.DataFrame(foodstamp_data)
        park_access = pd.DataFrame(park_access_data)
        housing  = pd.DataFrame(housing_data)

        part1 = pd.merge(obesity, diabetes, on=['County', 'State'])
        part2 = pd.merge(inactive, poverty, on=['County', 'State'])
        part3 = pd.merge(park_access, foodstamp, on=['County', 'State'])
        part4 = pd.merge(part1, part2, on=['County', 'State'])
        part5 = pd.merge(part3, part4, on=['County', 'State'])
        part6 = pd.merge(part5, housing, on=['County', 'State'])

        self.sdh_data = part6.to_dict(orient='records')

    def _load_and_convert_table(self, url):
        http = requests.get(url)
        soup = BeautifulSoup(http.content, "lxml")
        table_data = [[cell.text for cell in row(["th", "td"])]
                         for row in soup("tr")]
        table_header = table_data[0]
        table_content = table_data[1:]
        return [dict(x) for x in list(map(list, [zip(table_header, content) for content in table_content]))]


fhir_api = FhirApi('http://test.fhir.org/r4')
sdh_api = SdhApi()
medicare_api = MedicareApi()


@app.route('/')
def hello_world():
    return 'Hello, Nudge!'


# API Endpoints
@app.route('/fhir/patients')
def patients():
    return jsonify(fhir_api.patients())

@app.route('/fhir/patient/<patient_id>')
def patient(patient_id):
    return jsonify(fhir_api.get_patient(patient_id))

@app.route('/fhir/observation/<loinc>')
def observation(loinc):
    return jsonify(fhir_api.get_observation(loinc))

@app.route('/fhir/steps/<patient_id>')
def steps(patient_id):
    return jsonify(fhir_api.get_steps(patient_id))

@app.route('/fhir/writeback/steps/<string:patient_id>/<string:yyyy_MM_dd>/<int:step_count>')
def writeback_steps(patient_id, yyyy_MM_dd, step_count):
    return jsonify(fhir_api.write_steps(patient_id, yyyy_MM_dd, step_count))

@app.route('/medicare/claims')
def medicare_claims():
    return jsonify(medicare_api.get_claims())

@app.route('/sdh/county/<county>')
def sdh_county(county):
    filter_fn = lambda x: x['County'] == county
    return jsonify(sdh_api.get_sdh(filter_fn))

@app.route('/sdh/state/<state>')
def sdh_state(state):
    filter_fn = lambda x: x['State'] == state
    return jsonify(sdh_api.get_sdh(filter_fn))


# Admin Endpoints
@app.route('/admin/warmup')
def warmup():
    sdh_api.warmup()
    medicare_api.warmup()
    return "OK"

@app.route('/admin/reset')
def reset():
    sdh_api.reset()
    medicare_api.reset()
    return "OK"

if __name__ == '__main__':
    app.run(debug=True,
            host='0.0.0.0',
            port=int(os.environ.get('PORT', 2020)))
