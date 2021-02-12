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
 * @param {string} type 
 */
function paintCountry(type){

    //console.log("paint country");

    let style = {
        fillColor: colors_dict[type],
        weight: 2,
        opacity: type=='Country'? 1 : 0.5,
        color: 'white',
        dashArray: '3',
        fillOpacity: type=='Country'? 1 : 0.4
        };

    return style;   
}

