//Map definition
//Map definition
var top_places_map = L.map('top_places_map').setView(default_coords,default_zoom);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(top_places_map);



//When user changes selection, it will bring selected country
//d3.selectAll("#Country_select").on('change', function(){
function TopPlacesMap_init(){
    console.log("entro Top Places")

    //Setting country data
    //setCountryData();

    //Clearing preselected information
    resetMap();
};


/**
 * Clearing data from previous selection
 */
function resetMap(){
    
    //Setting map according to selected country
    top_places_map.setView(coords, 4);
     
 }