from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
import pymongo
import app1_psL #to change depend of file
# import atlas_obscura_scraper_psL #to change depend file


# Instance of Flask app
app=Flask(__name__)

# connect to MongoDB for tourism
mongo1 = PyMongo(app, uri="mongodb://localhost:27017/tourism")

# connect to another MongoDB with coordenates
mongo2 = PyMongo(app, uri="mongodb://localhost:27017/coordinates")

# connect to another MongoDB with scraping
mongo3 = PyMongo(app, uri="mongodb://another.host:27017/scraping")


##Create a root route '/' that will query your Mongo database and pass Inbound and OutBbound data into HTML template
@app.route("/")
def index():

    tourism=mongo1.db.tourism.find_one()
    
    
    mylist=app1_psL.data_OCEDE()


    for item in mylist:
        mongo1.db.tourism.update(
            {},
            item,
            upsert=True
        )
    


   # coords_dict=app1_psL.coordinates()

   # db.country_coords.insert_many(coords_dict)

    countries=mongo1.db.tourism.find_one()
    #
   # coordenates=jsonify(db.country_coords.find_all())
    print(countries)

    
    return render_template('index.html', countries=countries) #coordenates=coordenates)



##Call and import A (python file with code )
##Store the return value in Mongo as a Python dictionary



if __name__=='__main__':
    app.run(debug=True)