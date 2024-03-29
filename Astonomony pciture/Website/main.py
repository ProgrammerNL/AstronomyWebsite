import requests as req
import urllib
url = "https://api.nasa.gov/planetary/apod?api_key=2fOyml72PCLpmxTlvTaKApTFcZhVBMynLAcVKpmS"
response = req.get(url)
data = response.json()
image = data["hdurl"]
explanation = data["explanation"]
url = image
date = data["date"]
try:
    copyright = data["copyright"]
except KeyError:
    copyright = "No copyright information"
destination = '.\image' + date + '.jpg'
#destination = ".\image.jpg"
urllib.request.urlretrieve(url, destination)

print("Downloaded successfully!")
file = open("image" + date + ".txt", "a")
file.write(copyright + "\n")
file.write(date + "\n")
file.write(explanation + "\n")
file.write("\n")
file.close()
#print(data)