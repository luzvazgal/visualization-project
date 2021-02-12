
//Variables Definition to assigned geoJSON records for selected country, and its corresponding inbound and outbound countries.
let geoJSON_selected_country;


let geoJSON_layer_group = new L.LayerGroup();    //Adding all geoJSON layers in a group

//Map definition
let in_out_map = L.map('in_out_map').setView(default_coords,default_zoom);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(in_out_map);

//Adding legend to map
addLegend().addTo(in_out_map);


//When user changes selection, it will bring selected country

async function InOutMap_init(){
   

    //Clearing preselected information
    clearData();

    //Getting inbound and outbond countries as arrays
    getGeoJsonData(Object.keys(inbound_countries), Object.keys(outbound_countries));
};

/**
 * Getting geoJSONData according to user's selection
 * @param {Array} in_countries_list 
 * @param {Array} out_countries_list 
 */
function getGeoJsonData(in_countries_list, out_countries_list){
    //Reading geojson file containing all countries coordinate  
    d3.json(geojson_file).then(geoJsondata=>{
    
    
    in_out_map.setView(coords, 2);
        //Getting geoJSON records from selected country, inbound and outbound countries.
        geoJsondata.features.map(record=>{
            
            //Current geoJSON country
            geoJson_country = record.properties.name;

            if (geoJson_country == 'United States of America') geoJson_country = 'United States';
        
            //if current geoJson country equals selected country, assign geoJSON object to geoJSON_selected_country
            if(geoJson_country == selected_country.replace('_', ' ')){        
               geoJSON_selected_country = record;

                //Adding geoJson layer representing a selected country in map
                geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry( labels[0])));
            }
            
            //Iterating on inbound countries list 
            in_countries_list.forEach(country=>{
                //Replacing '_' character by space ' '
                country = country.replace('_', ' ');

                //if current geoJson country equals inbound country, assign that geoJSON object to geoJSON_inbound_country
                if(geoJson_country == country){
                 

                   //Adding geoJson layer representing an outbound country in map
                   geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry(labels[1])));
    
                    //Adding record (country) to already_painted array 
                    already_painted.push(record);
                }
            })

            //Iterating on outbound countries list 
            out_countries_list.forEach(country=>{
                 //Replacing '_' character by space ' '
                 country = country.replace('_', ' ');

                //if current geoJson country equals inbound country, assign that geoJSON object to geoJSON_outbound_country
                if(geoJson_country == country){
                   
                    if(already_painted.includes(record)){
                        geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry(labels[3])));
                    }
                    else{
                        geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry(labels[2])));
                        //Adding record (country) to already_painted array 
                        already_painted.push(record);
                    }           
                }
            })
        })

        geoJSON_layer_group.addTo(in_out_map);
        
 }
 )
 .catch(function(error) {
     console.log(error);
 })
}


/**
 * Clearing data from previous selection
 */
function clearData(){
    
    already_painted = [];

    geoJSON_layer_group.clearLayers();
    in_out_map.removeLayer(geoJSON_layer_group);
    
}



