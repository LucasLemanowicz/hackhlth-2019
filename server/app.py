import os

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

fhir_api = FhirApi()

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/patients')
def patient():
    return jsonify(fhir_api.patients())

if __name__ == '__main__':
    app.run(debug=True,
            host='0.0.0.0',
            port=int(os.environ.get('PORT', 2020)))
