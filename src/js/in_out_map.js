//Map definition
var in_out_map = L.map('in_out_map').setView([0,0],.5)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(in_out_map);



//When user changes selection, it will bring selected country
d3.selectAll("#Country_select").on('change', function(){

    console.log("entro")

    //Setting country data
    setCountryData();

    //Getting inbound and outbond countries as arrays
    let in_countries_list = Object.keys(inbound_countries.Top_Markets);
    let out_countries_list = Object.keys(outbound_countries.Top_Destinations);

    getGeoJsonData(in_countries_list, out_countries_list);
    console.log(in_countries_list);
    console.log(out_countries_list);
 
});

/**
 * Getting geoJSONData according to user's selection
 */
function getGeoJsonData(in_countries_list, out_countries_list){
    //Reading geojson file containing all countries coordinates
    d3.json(geojson_file).then(geoJsondata=>{
    
        //console.log("Features "+geoJsondata.features);
 
        //Variables Definition to assigned geoJSON records for selected country, and its corresponding inbound and outbound countries.
        let geoJSON_selected_country;
        let geoJSON_inbound_countries =[];
        let geoJSON_outbound_countries = [];
 
        //Getting geoJSON records from selected country, inbound and outbound countries.
        let geoJson_selected= geoJsondata.features.map(record=>{
            
            //Current geoJSON country
            geoJson_country = record.properties.name;
        
            //if current geoJson country equals selected country, assign geoJSON object to geoJSON_selected_country
            if(geoJson_country == selected_country){
                geoJSON_selected_country = record;
            }
            
            //Iterating on inbound countries list 
            in_countries_list.forEach(country=>{
                //Replacing '_' character by space ' '
                country = country.replace('_', ' ');

                //if current geoJson country equals inbound country, assign that geoJSON object to geoJSON_inbound_country
                if(geoJson_country == country){
                    geoJSON_inbound_countries.push(record);
                }
            })

            //Iterating on outbound countries list 
            out_countries_list.forEach(country=>{
                 //Replacing '_' character by space ' '
                 country = country.replace('_', ' ');

                //if current geoJson country equals inbound country, assign that geoJSON object to geoJSON_outbound_country
                if(geoJson_country == country){
                    geoJSON_outbound_countries.push(record);
                }
            })
        })

        console.log("geoJSON selected");
        console.log(geoJSON_selected_country);
        console.log(geoJSON_inbound_countries);
        console.log(geoJSON_outbound_countries);
     
 }
 )
 .catch(function(error) {
     console.log(error);
 })
}

function getCoordinates()
{
    
}

