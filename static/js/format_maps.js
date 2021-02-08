let already_painted = [];   //To track countries already painted to determine whether they're both inbound and outbound.

let colors = Object.values(colors_dict);
let labels = Object.keys(colors_dict);

/**
 * Add legend in map to determine colors
 */
function  addLegend(){
    //Adding legend to map for colors in map
    let legend = new L.Control({position: 'bottomleft'});
    legend.onAdd = function (in_out_map) {

        //Creating DOM div object to display the legend
        let div = L.DomUtil.create('div', 'info legend');
   
        // loop through our density intervals and generate a label with a colored square for each interval
        for (let i = 0; i < colors.length; i++) {
            div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + (labels[i]  + '<br>' );
         }

        return div;
    }
    return legend;
}


/**
 * Paints a country given a geoJson record and a type. Depending on whether it's the selected country, inbound or outbound tourism
 * 
 * @param {geoJson} record 
 * @param {string} type 
 */
function paintCountry(record, type){

    let style = {
        fillColor: colors_dict[type],
        weight: 2,
        opacity: type=='Country'? 1 : 0.5,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.9
        };

    return style;   
}

/**
 * 
 * @param {string} map_type 
 */
function setMap(map_type){

    let coordinates = [];
    let zoom;
    
    if(map_type='in_out'){
        coordinates = [0,0];
        zoom = 0.5;
    }

    let map = L.map(map_type+'_map').setView(coordinates,zoom);


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: map_type=='in_out' ? 'mapbox/light-v10': 'mapbox/outdoors-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: MAPBOX_KEY
    }).addTo(map);


    return map;
}

/**
 * 
 */
function setTileLayer(map_type){

    
}