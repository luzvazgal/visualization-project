/**VARIABLES DEFINITION */
var data;                                   //Getting data from JSON file
var selected_country;                       //User selected country
var inbound_countries, outbound_countries;  //Inbound and outbound countries of user's selected country
var years;                                  //Years of selected country
var coords;                                 //Selected country coordinates


/**
 * Gets user's selected country information: country, years, and its associated inbound countries and outbound countries
 */
//d3.selectAll("#Country_select").on('change', function(){
function setCountryData(){

    //Getting user's selection
    selected_country = d3.select('#Country_select').property('value'); 

    //Getting user's selected country related data
    let selected_country_data = data.filter( 
        record => record.name == selected_country
    )
    
    //Iterating on user's selected country related data to get inbound/outbound countries
    selected_country_data.forEach(record =>{
        years = record['years']; 
        inbound_countries = record['top_markets'];
        outbound_countries = record['top_destinations'];
    }
    )   
}


//Adding countries to select list using D3
/**
 * Getting countries list to add them into drop-down menu for user's selection
 */
function getData(){

    let select = d3.select("#Country_select");
    console.log("entro")

    d3.json('/turismo').then(countryJSON=>{

        data = countryJSON;
        //Getting countries list from data
        let countries_list = countryJSON.map(record=>{
            
            return record['name'];
        } )

        //Adding empty option
        select.append("option").text("").attr("value", "");

        //Adding each country as an option text and value
        countries_list.forEach(country=>{
            
            select.append("option").text(country).attr("value", country);
        }
        )
    }
    )
   
}

//Event listener. When user chooses a country from list
d3.selectAll("#Country_select").on('change', function(){

   //Sets all country info to be consumed according to country selected
    setCountryData( );

     //Setting selected country coordinates from JSON collection
     d3.json('/coordenadas').then(coordsJSON=>{
    
        
        for(let i=0; i<coordsJSON.length; i++){
            if(coordsJSON[i].name == selected_country){
                coords = [coordsJSON[i].latitude, coordsJSON[i].longitude] ;
                break;
            }
        }
         //Draws bar chart
        bargraph(true);

        //Draws Inbound/outbound countries map
        InOutMap_init();

        //Adds top places from country to map
        TopPlacesMap_init();

        }   
    )
    .catch(error=>console.log(error))

});



