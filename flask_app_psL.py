from flask import Flask, render_template, jsonify, redirect
import json
<<<<<<< HEAD
#from flask_pymongo import PyMongo
from bson.json_util import dumps, loads
import pymongo


 #to change depend of file
# import atlas_obscura_scraper_psL #to change depend file

=======
from flask_pymongo import PyMongo
from bson.json_util import dumps, loads
import pymongo
>>>>>>> c977c835e8cdc782c2042af13e01856b366969bd

# Instance of Flask app
app=Flask(__name__)

<<<<<<< HEAD
=======

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
>>>>>>> c977c835e8cdc782c2042af13e01856b366969bd

myclient=pymongo.MongoClient('mongodb+srv://user1:1234@cluster0.oi7pu.mongodb.net/turismo?retryWrites=true&w=majority')
db=myclient['tourismDB']
tourism_collection=db['tourismDB'] #se puede llamar a distintas coleciones
coords_collection=db['coordenates']
atlas_collection=db['Atlas']

<<<<<<< HEAD
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
=======
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





>>>>>>> c977c835e8cdc782c2042af13e01856b366969bd

if __name__ == "__main__":
    app.run(debug=True)