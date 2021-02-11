from flask import Flask, render_template, jsonify, redirect
import json
from flask_pymongo import PyMongo
from bson.json_util import dumps, loads
import app1_psL
import pymongo

 #to change depend of file
# import atlas_obscura_scraper_psL #to change depend file


# Instance of Flask app
app=Flask(__name__)


myclient=pymongo.MongoClient('mongodb://localhost:27017/')
db=myclient['turismo']
collection=db['turismo'] #se puede llamar a distintas coleciones

@app.route('/')
def index():

    return render_template('index.html')

# # connect to MongoDB for tourism
# mongo1 = PyMongo(app, uri="mongodb://localhost:27017/tourism")

# # connect to another MongoDB with coordenates
# mongo2 = PyMongo(app, uri="mongodb://localhost:27017/coordinates")

# # connect to another MongoDB with scraping
# mongo3 = PyMongo(app, uri="mongodb://another.host:27017/scraping")


##Create a root route '/' that will query your Mongo database and pass Inbound and OutBbound data into HTML template
@app.route("/turismo")
def turismo():
    countries=collection.find()

    return dumps(list(countries))

    

    # tourism=mongo1.db.tourism
    # coordinates=mongo2.db.coordinates
    
    # coordinates_funtion=app1_psL.coordinates()    
    # mylist=app1_psL.data_OCEDE()

    # #Uptade to the BD Tourism
    # for item in mylist:
    #     tourism.update({}, item, upsert=True)
    
    # #Update to BD Coorfinates
    # for item in coordinates_funtion:
    #     coordinates.update({}, item, upsert=True)
    
    # countries=tourism.find_one()

   
    # data_coordenates_docs=coordinates.find()
    # #Is necesary create more def with diferent methods 'get', 'render' 
    # return json.dumps(list(countries))
    # # return render_template('index.html', countries=countries, coordenates=data_coordenates)#coordenates=coordenates)






if __name__ == "__main__":
    app.run(debug=True)