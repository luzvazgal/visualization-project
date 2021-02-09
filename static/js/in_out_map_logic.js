
//Variables Definition to assigned geoJSON records for selected country, and its corresponding inbound and outbound countries.
let geoJSON_selected_country;
//let geoJSON_inbound_countries =[]; 
//let geoJSON_outbound_countries = [];


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
//d3.selectAll("#Country_select").on('change', function(){
async function InOutMap_init(){
    console.log("entro")

    //Clearing preselected information
    clearData();
    //Setting country data
    //setCountryData();

    //Getting inbound and outbond countries as arrays

    getGeoJsonData(Object.keys(inbound_countries.Top_Markets), Object.keys(outbound_countries.Top_Destinations));
    //console.log(in_countries_list);
    console.log("despuès geoJSON"); 

    //return geoJSON_selected_country;

};

/**
 * Getting geoJSONData according to user's selection
 * @param {Array} in_countries_list 
 * @param {Array} out_countries_list 
 */
function getGeoJsonData(in_countries_list, out_countries_list){
    //Reading geojson file containing all countries coordinates
    

    d3.json(geojson_file).then(geoJsondata=>{
    
        //console.log("Features "+geoJsondata.features);
 
        //Getting geoJSON records from selected country, inbound and outbound countries.
        geoJsondata.features.map(record=>{
            
            //Current geoJSON country
            geoJson_country = record.properties.name;

            if (geoJson_country == 'United States of America') geoJson_country = 'United States';
        
            //if current geoJson country equals selected country, assign geoJSON object to geoJSON_selected_country
            if(geoJson_country == selected_country.replace('_', ' ')){        
               geoJSON_selected_country = record;

               console.log("geo json selected country");
                //paint(record,'');
                //.addTo(in_out_map);

                //Adding geoJson layer representing a selected country in map
                geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry(record, labels[0])));
    
                //Adding record (country) to already_painted array 
                //already_painted.push(record);
            }
            
            //Iterating on inbound countries list 
            in_countries_list.forEach(country=>{
                //Replacing '_' character by space ' '
                country = country.replace('_', ' ');

                //if current geoJson country equals inbound country, assign that geoJSON object to geoJSON_inbound_country
                if(geoJson_country == country){
                   //geoJSON_inbound_countries.push(record);
                   //paint(record,'in');

                   //Adding geoJson layer representing an outbound country in map
                   geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry(record, labels[1])));
    
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
                    //geoJSON_outbound_countries.push(record);
                    //paint(record,'out');
                    if(already_painted.includes(record)){
                        geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry(record, labels[3])));
                    }
                    else{
                        geoJSON_layer_group.addLayer(L.geoJson(record, paintCountry(record, labels[2])));
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
    
   console.log("CLEAR DATA antes")
   // console.log(geoJSON_layer_group)
    already_painted = [];

    geoJSON_layer_group.clearLayers();
    in_out_map.removeLayer(geoJSON_layer_group);

    console.log("CLEAR DATA despues")
   // console.log(geoJSON_layer_group)
    
}



