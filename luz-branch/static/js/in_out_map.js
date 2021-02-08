
//Variables Definition to assigned geoJSON records for selected country, and its corresponding inbound and outbound countries.
let geoJSON_selected_country;
let geoJSON_inbound_countries =[]; 
let geoJSON_outbound_countries = [];

let already_painted = [];   //To track countries already painted to determine whether they're both inbound and outbound.
let geoJSON_layer_group= new L.LayerGroup();    //Adding all geoJSON layers in a group

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

    //Clearing preselected information
    clearData();
    //Setting country data
    setCountryData();

    //Getting inbound and outbond countries as arrays

   getGeoJsonData(Object.keys(inbound_countries.Top_Markets), Object.keys(outbound_countries.Top_Destinations));
    //console.log(in_countries_list);
    //console.log(out_countries_list); 
});

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
        let geoJson_selected= geoJsondata.features.map(record=>{
            
            //Current geoJSON country
            geoJson_country = record.properties.name;
        
            //if current geoJson country equals selected country, assign geoJSON object to geoJSON_selected_country
            if(geoJson_country == selected_country){
               //geoJSON_selected_country = record;
                paint(record,'');
            }
            
            //Iterating on inbound countries list 
            in_countries_list.forEach(country=>{
                //Replacing '_' character by space ' '
                country = country.replace('_', ' ');

                //if current geoJson country equals inbound country, assign that geoJSON object to geoJSON_inbound_country
                if(geoJson_country == country){
                   //geoJSON_inbound_countries.push(record);
                   paint(record,'in');
                }
            })

            //Iterating on outbound countries list 
            out_countries_list.forEach(country=>{
                 //Replacing '_' character by space ' '
                 country = country.replace('_', ' ');

                //if current geoJson country equals inbound country, assign that geoJSON object to geoJSON_outbound_country
                if(geoJson_country == country){
                    //geoJSON_outbound_countries.push(record);
                    paint(record,'out');
                }
            })
        })

        console.log("geoJSON selected");
        console.log(geoJSON_selected_country);
        //console.log(geoJSON_inbound_countries);
        //console.log(geoJSON_outbound_countries);    

        geoJSON_layer_group.addTo(in_out_map);
        

    //Paint the country's edge 
   //paintCountries();
   
 }
 )
 .catch(function(error) {
     console.log(error);
 })
}

/**
 * Paints a country given a geoJson record and a type. Depending on whether it's the selected country, inbound or outbound tourism
 * 
 * @param {geoJson} record 
 * @param {string} type 
 */
function paint(record, type){

    let color, opacity;

    if(already_painted.includes(record)){
        color = '#0B5345';      //green if it's both inbound and outbound
        opacity = 0.5;
    }else{

        switch(type){
            case 'in':
                opacity = 0.5;
                color = '#40E0D0';      //yellow inbound tourism
            break;

            case 'out':
                opacity = 0.5;
                color = '#FFBF00';      //blue outbound tourism
            break;

            default:
                opacity = 1;
                color = '#DE3163';      //red-pink selected country
            break;

        }
    }

    let geoJSON_layer = L.geoJson(record, {style: {
        fillColor: color,
        weight: 2,
        opacity: opacity,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.9
        }}
    )
    //.addTo(in_out_map);
    geoJSON_layer_group.addLayer(geoJSON_layer);
    
    //Adding record (country) to already_painted array 
    already_painted.push(record);
}

/**
 * Clearing data from previous selection
 */
function clearData(){
    
   //console.log("CLEAR DATA antes")
   // console.log(geoJSON_layer_group)
    already_painted = [];

    geoJSON_layer_group.clearLayers();
    in_out_map.removeLayer(geoJSON_layer_group);

    //console.log("CLEAR DATA despues")
   // console.log(geoJSON_layer_group)
    
}

/**
 * Paint countries edges
 * Color: '' Selected country
 * Color: '' Inbound
 * Color: '' Outbound
 */
/*function paintCountries()
{
    console.log("entro paint Countries")
    console.log(geoJSON_selected_country)

    //Adding selected country
    L.geoJson(geoJSON_selected_country, {style: {
        fillColor: '#DE3163',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.9
    }})
    .addTo(in_out_map);


    //Adding inbound countries
    geoJSON_inbound_countries.forEach(inbound=>
    {
        L.geoJson(inbound, {style: {
            fillColor: '#40E0D0',
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        }})
        .addTo(in_out_map);

        console.log("in"+inbound.properties.name);
    }
    )

    //Adding outbound countries
    geoJSON_outbound_countries.forEach(outbound=>
    {
        L.geoJson(outbound, {style: {
            fillColor: '#DE3163',
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        }})
        .addTo(in_out_map);

        console.log("out"+outbound.properties.name);
    }
    )
}*/


   

