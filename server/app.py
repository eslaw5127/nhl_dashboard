from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from the back end!"})

if __name__ == '__main__':
    app.run(debug=True)