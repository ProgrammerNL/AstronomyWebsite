from flask import Flask
import requests as req
import urllib
app = Flask(__name__)

@app.route('/')
def index():
    url = "https://api.nasa.gov/planetary/apod?api_key=2fOyml72PCLpmxTlvTaKApTFcZhVBMynLAcVKpmS"
    response = req.get(url)
    data = response.json()
    image = data["hdurl"]
    explanation = data["explanation"]
    url = image
    date = data["date"]
    copyright = data["copyright"]
    destination = 'image.jpg'

    urllib.request.urlretrieve(url, destination)

    print("Downloaded successfully!")
    file = open("image.txt", "w")
    file.write(copyright + "\n")
    file.write(date + "\n")
    file.write(explanation + "\n")
    file.write("\n")
    file.close()
    #print(data)
if __name__ == '__main__':
    app.run(debug=True)
