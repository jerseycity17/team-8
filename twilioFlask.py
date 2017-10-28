from flask import Flask, request
from twilio.rest import Client
import os
app = Flask(__name__)

twilios = open('twilioapi', 'r')
nums = open('numbers', 'r')
creds = twilios.read().split()
num = nums.read().split()
ACCOUNT_SID = creds[0]
AUTH_TOKEN = creds[1]
NUMBER1 = num[0]
NUMBER2 = num[1]

client = Client(ACCOUNT_SID, AUTH_TOKEN)

@app.route('/sms', methods=['POST'])
def sms():
	to = request.form['To']
	body = request.form['Body']
	print(to, body)
	client.messages.create(
		to = to,
		from_ = NUMBER1,
		body = body,
	)

if __name__ == "__main__":
	port = os.environ.get("PORT", 5000)
	app.run(host='0.0.0.0', port=port)
