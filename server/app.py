from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

import csv
import json

app = Flask(__name__)
CORS(app) 

def csv_to_json(csv_file):
    json_data = []
    with open(csv_file, mode='r') as file:
        reader = csv.reader(file)
        headers = next(reader)
        for row in reader:
            team_data = {
                "name": row[0],
                "games": int(row[1]),
                "w": int(row[2]),
                "l": int(row[3]),
                "ol": int(row[4]),
                "pts": int(row[5]),
                "ptsper": float(row[6]),
                "gf": int(row[7]),
                "ga": int(row[8]),
                "srs": float(row[9]),
                "sos": float(row[10]),
                "rpt": float(row[11]),
                "rw": int(row[12])
            }
            json_data.append(team_data)
    
    return json_data

@app.route('/api/western', methods=['GET'])
def get_western():
    csv_file = 'western.csv'
    json_data = csv_to_json(csv_file)

    return json_data

@app.route('/api/pacific', methods=['GET'])
def get_pacific():
    csv_file = 'pacific.csv'
    json_data = csv_to_json(csv_file)

    return json_data

@app.route('/api/metro', methods=['GET'])
def get_metro():
    csv_file = 'metro.csv'
    json_data = csv_to_json(csv_file)

    return json_data

@app.route('/api/atlantic', methods=['GET'])
def get_atlantic():
    csv_file = 'atlantic.csv'
    json_data = csv_to_json(csv_file)

    return json_data    


@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from the back end!"})

@app.route('/api/team-data')
def get_team_data():
    # Assuming Team.csv is in the same directory as app.py
    csv_path = 'team_data.csv'
    
    # Read CSV file into pandas DataFrame
    df = pd.read_csv(csv_path)
    
    # Convert DataFrame to JSON format
    team_data_json = df.to_json(orient='records')
    print(team_data_json)

    return team_data_json

if __name__ == '__main__':
    app.run(debug=True)