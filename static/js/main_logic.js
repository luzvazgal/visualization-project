/**VARIABLES DEFINITION */
var selected_country;                       //User selected country
var inbound_countries, outbound_countries;  //Inbound and outbound countries of user's selected country
var years;                                  //Years of selected country
var coords;                                 //Selected country coordinates
var country_top_places;                     //Selected country top places



/**
 * Gets user's selected country information: country, years, and its associated inbound countries and outbound countries
 */
//d3.selectAll("#Country_select").on('change', function(){
function setCountryData(){

    //Getting user's selection
    //selected_country = d3.select(this).property('value'); 
    selected_country = d3.select('#Country_select').property('value'); 

    //Getting user's selected country related data
    let selected_country_data = data.filter( 
        record => record.name == selected_country
    )
    
    //Iterating on user's selected country related data to get inbound/outbound countries
    selected_country_data.forEach(record =>{
        years = record.Years; 
        inbound_countries = record.Inbound;
        outbound_countries = record.Outbound;
        coords = record.coords;
    }
    )
  
    //console.log("COORDS");
    //console.log(coords);
    //console.log(inbound_countries);
    //console.log(outbound_countries);


};


function setCountryTopPlaces(){

    console.log(top_places_data[0])

    //Get selected country's top places
   /* let country_tp = top_places_data.filter(
        record => {return selected_country == record['country'][0]}
    )*/

    let country_tp = [];

    for(let i=0; i<top_places_data.length;i++){
        if(top_places_data[i]['country'][0]== selected_country){
            country_tp = top_places_data[i];
            break;
        }
    }

   /*top_places_data.forEach(
        record => {console.log(record['country'][0]); console.log(selected_country)}
*/


    //Reacommodating top places data as dictionary 
    country_top_places = {
        country : selected_country,
        places : [
            {city: country_tp.city[0], place: country_tp.title[0], coordinates: [country_tp.coordinates[0]['lat'],country_tp.coordinates[0]['lng']]},
            {city: country_tp.city[1], place: country_tp.title[1], coordinates: [country_tp.coordinates[1]['lat'],country_tp.coordinates[1]['lng']]},
            {city: country_tp.city[2], place: country_tp.title[2], coordinates: [country_tp.coordinates[2]['lat'],country_tp.coordinates[2]['lng']]},
            {city: country_tp.city[3], place: country_tp.title[3], coordinates: [country_tp.coordinates[3]['lat'],country_tp.coordinates[3]['lng']]},
            {city: country_tp.city[4], place: country_tp.title[4], coordinates: [country_tp.coordinates[4]['lat'],country_tp.coordinates[4]['lng']]},
        ]
    }



}

//Adding countries to select list using D3
/**
 * Getting countries list to add them into drop-down menu for user's selection
 */
function getData(){

    let select = d3.select("#Country_select");

    //Getting countries list from data
    let countries_list = data.map(record=>{
        //console.log(Object.keys(record)[0]);
        return record.name;
    } )

    //Adding empty option
    select.append("option").text("").attr("value", "");

    //Adding each country as an option text and value
    countries_list.forEach(country=>{
        
        select.append("option").text(country).attr("value", country);
    }
    )
   
}


d3.selectAll("#Country_select").on('change', function(){
   
    setCountryData();

    setCountryTopPlaces();
    
    InOutMap_init();

    TopPlacesMap_init();
    

    /*InOutMap_init().then((response) => {
        console.log('It worked :)')
        return response.TopPlacesMap_init();
    }).catch(error => console.log(error));*/
    
});



