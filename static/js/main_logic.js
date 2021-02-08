/**VARIABLES DEFINITION */
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
    //selected_country = d3.select(this).property('value'); 
    selected_country = d3.select('#Country_select').property('value'); 

    //Getting user's selected country related data
    let selected_country_data = data.filter( 
        record => record.name == selected_country
    )
    

    //Iterating on user's selected country related data to get 
    selected_country_data.forEach(record =>{
       years = record.Years; 
       inbound_countries = record.Inbound;
       outbound_countries = record.Outbound;
       coords =record.coords;
    }
    )
    
    console.log("COORDS");
    console.log(coords);
    //console.log(inbound_countries);
    //console.log(outbound_countries);


};

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
    InOutMap_init();
    TopPlacesMap_init();
});

