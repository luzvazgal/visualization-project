
//Map definition
var top_places_map = L.map('top_places_map').setView(default_coords,default_zoom);

//Layer group to add all Popups related to Top Places
let top_places_layer_group = new L.LayerGroup();    //Adding all geoJSON layers in a group



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
async function TopPlacesMap_init(){
    console.log("entro Top Places")

    //Setting country data
    //setTopPlaces_CountryMap();
    top_places_map.setView(coords, 4);

    //Iterating on Country's top places to get their info: place, city, coordinates
    add_Top_Places();

    //Clearing preselected information
    clear_Map();
};

/**
 * 
 */
function add_Top_Places(){

    country_top_places.places.forEach( record=>{
        
        let message = '<p><b>Place: </b>'+record.place+'<br><b>City: '+record.city+'</b> </p>';

        L.popup()
        .setLatLng(L.latLng(record.coordinates))
        .setContent(message)
        .openOn(top_places_map)
    }
    )

}

/**
 * Clearing data from previous selection
 */
function clear_Map(){
     
    top_places_layer_group.clearLayers();
    top_places_map.removeLayer(top_places_layer_group);
 }

