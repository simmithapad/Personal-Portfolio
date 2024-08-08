from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
      return "Hey there!"

@app.route('/submit', methods=["POST"])
def submitForm():
    try:
        name = request.json["name"]
        email = request.json["email"]
        message = request.json["message"]
        
        print("Received POST request at /submit")
    
        return jsonify({
            "name": name,
            "email": email,
            "message": message
        })
    
    except KeyError as e:
        return jsonify({"error": "Missing required field"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)