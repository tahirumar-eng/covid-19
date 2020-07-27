const INITIAL_STATE={
    chartData:{
        labels:['TOTAL CASES','TOTAL DEATHS','TOTAL RECOVERED'],
           datasets:[
               {
                label:'TOTAL cases',
                data:[
                    4567790,  
                    2567777,
                    1567777,
                ],
                backgroundColor:[
                   
                    'rgba(75, 192, 200, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    
                  ]
               }
           ]
    }
}
const chart2Reducers=(state=INITIAL_STATE,action)=>{
    return state
}
export default chart2Reducers