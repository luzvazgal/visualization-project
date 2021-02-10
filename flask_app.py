from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
import A #[name_pythonfilefile_data]
import B #[name_pythonfile_data2]

#Instance of Flask app
app=Flask(_name_)

##Use flask_pymongo to set up mongo connection

app.config["MONGO_URI"]="mongodb://localhost:27017/tourismdb"
mongo=PyMongo(app)


##Create a root route '/' that will query your Mongo database and pass Inbound and OutBbound data into HTML template
@app.route("/")
def index():
    client = pymongo.MongoClient(conn)
    db = client.tourismdb

    for item in mylist:
        db.tourismdb.insert_one(item)

#Adding CSV with coordinates
    coords_df = pd.read_csv(file_coordinates, sep='\t')

    coords_dict=coords_df.to_dict(orient='records')

    db.country_coords.insert_many(coords_dict)
    
    
    return render_template('index.html', tourism_data=db)



##Call and import A (python file with code )
##Store the return value in Mongo as a Python dictionary



if __name__=='__main__':
    app.run(debug=True)