from flask import Flask, jsonify
from flask_cors import CORS
import csv

app = Flask(__name__)
CORS(app)

INNOVATION_ECOSYSTEM_URL = "data/innovation_ecosystem.csv"

@app.route('/innovation_graph')
def send_data():
    with open(INNOVATION_ECOSYSTEM_URL, 'r') as f:
        data = list(csv.DictReader(f))
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run()