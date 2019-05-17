import requests

r = requests.post('http://localhost:5001', json={ "username" : "firekitty69", "password": "love2hug"})

print(r.text)