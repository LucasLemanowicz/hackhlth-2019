import os
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
    OBESITY_DATA_SOURCE = "https://nccd.cdc.gov/DHDSPAtlas/SocialDeterminantThematicDataHandler.ashx?{%22ThemeId%22:62,%22GeographyType%22:%22county%22,%22ParentGeographyFilter%22:%22%22,%22ThemeFilterOptions%22:[]}"

    def __init__(self):
        self.obesity_data = None

    def warmup(self):
        self._get_obesity_data()

    def reset(self):
        self.obesity_data = None

    def obesity_by_county(self, county):
        if not self.obesity_data:
            self._get_obesity_data()

        return list(filter(lambda x: x['County'] == county, self.obesity_data))

    def obesity_by_state(self, state):
        if not self.obesity_data:
            self._get_obesity_data()

        return list(filter(lambda x: x['State'] == state, self.obesity_data))

    def _get_obesity_data(self):
        http = requests.get(self.OBESITY_DATA_SOURCE)
        soup = BeautifulSoup(http.content, "lxml")
        table_data = [[cell.text for cell in row(["th", "td"])]
                         for row in soup("tr")]
        table_header = table_data[0]
        table_content = table_data[1:]
        dict_data = [dict(x) for x in list(map(list, [zip(table_header, content) for content in table_content]))]
        clean_set = [{
            'State': d['State'],
            'County': d['County'],
            'Obesity': d['Value'],
        } for d in dict_data]
        self.obesity_data = clean_set


fhir_api = FhirApi()
sdh_api = SdhApi()


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/warmup')
def warmup():
    sdh_api.warmup()

@app.route('/fhir/patients')
def patient():
    return jsonify(fhir_api.patients())

@app.route('/sdh/obesity/county/<county>')
def obesity_county(county):
    return jsonify(sdh_api.obesity_by_county(county))

@app.route('/sdh/obesity/state/<state>')
def obesity_state(state):
    return jsonify(sdh_api.obesity_by_state(state))

if __name__ == '__main__':
    app.run(debug=True,
            host='0.0.0.0',
            port=int(os.environ.get('PORT', 2020)))
