import os
import pandas as pd
import requests

from bs4 import BeautifulSoup
from clientpy4.fhirclient import client
from clientpy4.fhirclient.models import patient as p
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


class FhirApi:
    def __init__(self, api_base='http://test.fhir.org/r4'):
        self.smart = client.FHIRClient(settings={
            'app_id': 'hackhlth2019',
            'api_base': api_base,
        })

    def patients(self):
        search = p.Patient.where(struct={})
        patients = search.perform_resources(self.smart.server)
        return [patient.as_json() for patient in patients]

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


fhir_api = FhirApi()
sdh_api = SdhApi()


@app.route('/')
def hello_world():
    return 'Hello, Nudge!'


# API Endpoints
@app.route('/fhir/patients')
def patient():
    return jsonify(fhir_api.patients())

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
    return "OK"

@app.route('/admin/reset')
def reset():
    sdh_api.reset()
    return "OK"

if __name__ == '__main__':
    app.run(debug=True,
            host='0.0.0.0',
            port=int(os.environ.get('PORT', 2020)))
