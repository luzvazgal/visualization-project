from flask import Flask, render_template, jsonify, redirect
import json
#from flask_pymongo import PyMongo
from bson.json_util import dumps, loads
import pymongo


 #to change depend of file
# import atlas_obscura_scraper_psL #to change depend file


# Instance of Flask app
app=Flask(__name__)


myclient=pymongo.MongoClient('mongodb+srv://user1:1234@cluster0.oi7pu.mongodb.net/turismo?retryWrites=true&w=majority')
db=myclient['tourismDB']
tourism_collection=db['tourismDB'] #se puede llamar a distintas coleciones
coords_collection=db['coordenates']
atlas_collection=db['Atlas']

@app.route('/')
def index():
    return render_template('index.html')

#Getting OECD countries tourism data
@app.route("/turismo")
def turismo():
    countries=tourism_collection.find()
    return dumps(list(countries))

#Getting countries coordenates
@app.route("/coordenadas")
def coordenadas():
    coords=coords_collection.find()
    return dumps(list(coords))

#Getting top places for every country
@app.route("/lugares")
def lugares():
    places=atlas_collection.find()
    return dumps(list(places))

if __name__ == "__main__":
    app.run(debug=True)