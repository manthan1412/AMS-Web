import requests
import base64
import json
url = "https://ams1412.herokuapp.com/login/"
url = "http://localhost:8080/login/"
username = "kb"
password = "xyz"
types = "Student"
payload = ""
response = requests.request("GET", url + types.lower(),auth=(username, password), data=payload, timeout=(3,10))
data = response.json()
print data['message']
# print data["name"]