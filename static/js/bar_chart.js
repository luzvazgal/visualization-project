console.log('ok')


const data_bar=data

//princiapal graph

console.group(data)

function bargraph(index){

   

    let country=data_bar[index].name 
    let years=data_bar[index].years;

    //Get numbers of top markets
    let dict_1=Object.values(data_bar[index].top_markets)
    x_list_2=[]

    for(i=0;i<5;i++){
        x_list_1=[]
        for(j=0;j<5;j++){
            x_list_1.push(dict_1[j][i])            
            }
        x_list_2.push(x_list_1.reduce((a,b)=>a+b,0))
    };

    let inbound=x_list_2;

    //Get numbers of top destinations
    let dict_2=Object.values(data_bar[index].top_destinations)
    x_list_3=[]

    for(i=0;i<5;i++){
        x_list_4=[]
        for(j=0;j<5;j++){
            x_list_4.push(dict_2[j][i])            
            }
        x_list_3.push(x_list_1.reduce((a,b)=>a+b,0))
    };

    let outbound=x_list_3


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
bargraph(0)



//Change of selection of country
d3.selectAll('#Country_select')
    .on("change", function(){
        let opt_sel=d3.select(this).property('value')
        

        
        for (i=0;i<data_bar.length;i++) {
            if(data_bar[i].name===opt_sel){
                let newIndex=i
                bargraph(newIndex)
            }}
       
            console.log(opt_sel)    
            
    });