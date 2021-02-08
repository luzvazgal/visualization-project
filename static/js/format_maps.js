let colors = ['#DE3163','#40E0D0','#FFBF00','#0B5345'];
let already_painted = [];   //To track countries already painted to determine whether they're both inbound and outbound.

/**
 * Add legend in map to determine colors
 */
function  addLegend(){
    //Adding legend to map for colors in map
    let legend = new L.Control({position: 'bottomleft'});
    legend.onAdd = function (in_out_map) {

    let div = L.DomUtil.create('div', 'info legend'),
        magnitudes = [0, 1, 2, 3, 4, 5];
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < magnitudes.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(magnitudes[i]) + '"></i> ' +
            magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
    }

    return div;

    legend.addTo(mymap);
}
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
        color = colors[3];      //green if it's both inbound and outbound
        opacity = 0.5;
    }else{

        switch(type){
            case 'in':
                opacity = 0.5;
                color = colors[1];      //yellow inbound tourism
            break;

            case 'out':
                opacity = 0.5;
                color = colors[2];      //blue outbound tourism
            break;

            default:
                opacity = 1;
                color = colors[0];      //red-pink selected country
            break;

        }
    }

    let style = {
        fillColor: color,
        weight: 2,
        opacity: opacity,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.9
        };

    return style;

    
    
    
}