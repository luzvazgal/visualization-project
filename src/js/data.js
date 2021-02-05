//Retrieving countries list. It will be retrieved from catalog but used an array as dummy data

countries_list = ['Australia', 'Austria', 'Colombia', 'Costa Rica', 'Croatia', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary',
'Italy', 'Latvia', 'Lithuania', 'Malta', 'Netherlands', 'New Zealand', 'Norway', 'Peru', 'Poland', 'Romania', 'Russia', 'Slovenia', 'Spain',
'Switzerland', 'Turkey', 'United States'];


//Adding countries to select list using D3
/**
 * Getting countries list to add them into drop-down menu for user's selection
 */
function getData(){

    let select = d3.select("#countries_list");

    //Adding each country as an option
    countries_list.forEach(country=>{
        
        select.append("option").text(country);
    })
}
