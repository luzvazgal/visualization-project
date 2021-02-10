

/**
 * Displaying barchart according to user's selection.
 * @param {boolean} is_selected  True: user has done a selection; false, it's the initial load.
 */
function bargraph(is_selected){

    
    let inbound=[];
    let outbound=[];
    let country;

    //If index == -1, it will show the bar chart without data; otherwise, it will display info
   if(is_selected){

        country=selected_country


        //Get numbers of top markets
    
        let dict_1=Object.values(inbound_countries)
        x_list_2=[]

        //Summarizing visitors per year: 2014,2015,2016,2017,2018
        inbound.push(dict_1.map(rec=>{return rec[0]}).reduce((a, b) => a + b, 0));  //2014 sum
        inbound.push(dict_1.map(rec=>{return rec[1]}).reduce((a, b) => a + b, 0));  //2015 sum
        inbound.push(dict_1.map(rec=>{return rec[2]}).reduce((a, b) => a + b, 0));
        inbound.push(dict_1.map(rec=>{return rec[3]}).reduce((a, b) => a + b, 0));
        inbound.push(dict_1.map(rec=>{return rec[4]}).reduce((a, b) => a + b, 0));  //2018 sum


        //Get numbers of top destinations
    
        let dict_2 = Object.values(outbound_countries);

        //Summarizing travelers per year: 2014,2015,2016,2017,2018
        outbound.push(dict_2.map(rec=>{return rec[0]}).reduce((a, b) => a + b, 0)); //2014 sum
        outbound.push(dict_2.map(rec=>{return rec[1]}).reduce((a, b) => a + b, 0));
        outbound.push(dict_2.map(rec=>{return rec[2]}).reduce((a, b) => a + b, 0));
        outbound.push(dict_2.map(rec=>{return rec[3]}).reduce((a, b) => a + b, 0));
        outbound.push(dict_2.map(rec=>{return rec[4]}).reduce((a, b) => a + b, 0)); //2018 sum


   }else{
       country = '';
       years = [2014,2015,2016,2017,2018]
   }

    

    let trace1_Bar={
        x:years,
        y:inbound,
        name: 'Inbound Tourism',
        type:'bar',
        marker: {
            color: 'rgb(68,84,106)',
            opacity: 0.9,
          }
    };

    let trace2_Bar={
        x:years,
        y:outbound,
        name: 'Outbound Tourism',
        type:'bar',
        marker: {
            color: 'rgb(175,171,171)',
            opacity: 0.7
          }
    };

    let data=[trace1_Bar, trace2_Bar];

    let layout={
        title: `${country}`,
        titlefont:{
            size:30,
            color: 'rgb(107, 107, 107)'
        },
    
        xaxis: {tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
        }},
        yaxis: {
            title: 'Tourists (millions)',
            titlefont: {
            size: 16,
                color: 'rgb(107, 107, 107)'
            },
            tickfont: {
            size: 14,
                color: 'rgb(107, 107, 107)'
                }},
  
        barmode:'group'
    };

    Plotly.newPlot('bar_graph', data, layout)

};

//Load page
bargraph(false) //Not displaying anything

