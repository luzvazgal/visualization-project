
//Map definition
var top_places_map = L.map('top_places_map').setView(default_coords,default_zoom);

//Layer group to add all Popups related to Top Places
let top_places_cluster = new L.LayerGroup();    //Adding all geoJSON layers in a group

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
    //console.log("entro Top Places")
    //top_places_cluster = new L.MarkerClusterGroup();
     
    //Clearing preselected information
     clear_Map();

    //Setting country data
    //setTopPlaces_CountryMap();
    top_places_map.setView(coords, 4);

    //Iterating on Country's top places to get their info: place, city, coordinates
    add_Top_Places();

   
};

/**
 * Adding Top Places to map
 */
function add_Top_Places(){

    console.log("Coordinates TP")
    

    country_top_places.places.forEach( record=>{

       // console.log(record.coordinates)
        let marker = L.marker(record.coordinates);
        let message = '<p><b>Place: </b>'+record.place+'<br><b>City: </b>'+record.city+'</p>';

        //marker.bindPopup(message).openPopup();
        marker.bindPopup(message).openPopup();
        marker.addTo(top_places_cluster);
    }
    )

   top_places_cluster.addTo(top_places_map);
}

/**
 * Clearing data from previous selection
 */
function clear_Map(){
     
    top_places_cluster.clearLayers();
    top_places_map.removeLayer(top_places_cluster);
 }

