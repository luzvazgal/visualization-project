

# Project Description


Tourism in OECD Countries and others
It comprises the activities of persons travelling to and staying in places outside their usual environment for not more than one consecutive year for leisure, business and other purposes, different from the exercise of an activity remunerated from within the place visited.

Inbound tourism involves non residents of an economy travelling within the economy of compilation;
Outbound tourism involves residents of an economy travelling in a different economic territory.

Analyzed countries: Australia, Austria, Colombia, Costa Rica, Croatia, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Malta, Netherlands, New Zealand, Norway, Peru, Poland, Romania, Russia, Slovenia, Spain, Switzerland, Turkey, United States of America.

Files taken from: https://data.oecd.org

# Project structure

* **data/** 
* **src/js/**
    * **config.js**: contains links to geoJSon file to all countries boundaries
    * **data_temp.js**: dummy data to work on Javascript files
    * **data**: data CSV files for each analyzed country
    * **in_out_map**: Javascript file to display a user selected country and their corresponding Inbound/Outbound tourism using Leaflet and geoJSON
* **templates**
    * **css/**: style files
    * **index.html**: presentation file having countries displayed in a drop-down list for user selection. 
* **app.py**: Python file to render files according to user's introduced URL