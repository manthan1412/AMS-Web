import requests

url = "https://ams1412.herokuapp.com/test"

payload = ""
headers = {
    'content-type': "application/json",
    'cache-control': "no-cache"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)