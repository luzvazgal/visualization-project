

//Adding countries to select list using D3
/**
 * Getting countries list to add them into drop-down menu for user's selection
 */
function getData(){

    let select = d3.select("#Country_select");

    //Getting countries list from data
    let countries_list = data.map(record=>{
        console.log(Object.keys(record)[0]);
        return Object.keys(record)[0];
    } )


    //Adding each country as an option text and value
    countries_list.forEach(country=>{
        
        select.append("option").text(country).attr("value", country);
    }
    )
   
}
