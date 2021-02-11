
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
async function TopPlacesMap_init(){
     
    //Clearing preselected information
     clear_Map();

   
    // Centralized map using selected country coordinates
    top_places_map.setView(coords, 3);

    //Setting country data
    setCountryTopPlaces();
};


/**
 * Sets country Top places in map
 */
function setCountryTopPlaces(){


    d3.json('/lugares').then(countryJSON=>
    {

        //Get selected country's top places
        let country_top_places = countryJSON.filter(
            record => {return selected_country == record['country']}
        );

        //Iterating over country's top places to add marker and popup
        country_top_places.forEach( record=>{
    
           // console.log(record.coordinates)
            let marker = L.marker([record['coordinates']['lat'], record['coordinates']['lng']]);
            let message = '<p><b>Place: </b>'+record['title']+'<br><b>City: </b>'+record['city']+'</p>';
    
            //marker.bindPopup(message).openPopup();
            marker.bindPopup(message).openPopup();
            marker.addTo(top_places_cluster);
        }
        )
    
       top_places_cluster.addTo(top_places_map);

    }
    )
    .catch(error => console.log(error))
 
}


/**
 * Clearing data from previous selection
 */
function clear_Map(){
     
    top_places_cluster.clearLayers();
    top_places_map.removeLayer(top_places_cluster);
 }

