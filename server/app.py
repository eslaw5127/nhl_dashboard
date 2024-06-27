from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

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
    
    return team_data_json

if __name__ == '__main__':
    app.run(debug=True)