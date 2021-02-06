var in_out_map = L.map('in_out_map').setView([0,0],.5)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(in_out_map);





/**
 * Draws country and its inbound and outbound tourism countries 
 */
function selectCountry(){

    //Getting user's selection
    let selected_country = d3.select("#Country_select").node().value; 

    //Getting country's selected related data
    let selected_country_data = data.filter( 
        record => record.name == selected_country
    )
    
    let inbound_countries, outbound_countries;

    selected_country_data.forEach(record =>{
        inbound_countries = Object.keys(record.Inbound.Top_Markets);
        outbound_countries = Object.keys(record.Outbound.Top_Destinations);
    }
    )

    console.log(inbound_countries);
    console.log(outbound_countries);

    //Reading geojson file containing all countries coordinates
    d3.json(geojson_file).then(record=>{
        
        //record.filter(function checkCountry()
        //{
               console.log(record);}

    //)}
    )
    .catch(function(error) {
        console.log(error);
    });


}

function getCoordinates()
{
    
}

