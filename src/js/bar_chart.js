
const data_bar=data

//princiapal graph

function bargraph(index){

   

    let country=data_bar[index].name 

    
    let years=data_bar[index].Years;
    let inbound=data_bar[index].Inbound.Tourist_Inbound;
    let outbound=data_bar[index].Outbound.Tourist_Outbound;


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
        console.log(opt_sel)

        
        for (i=0;i<data_bar.length;i++) {
            if(data_bar[i].name===opt_sel){
                let newIndex=i
                bargraph(newIndex)
            }}
       
            
            
    });