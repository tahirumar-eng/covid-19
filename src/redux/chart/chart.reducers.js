const INITIAL_STATE={
    chartData:{
        labels:['ACTIVE CASES','NEW CASES','NEW DEATHS','TOTAL CASES','TOTAL DEATHS','TOTAL RECOVERED'],
           datasets:[
               {
                label:'Active cases',
                data:[
                    5567777,
                    4567777,
                    3567777,
                    2567777,
                    1567777,
                    4567790,  
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 200, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    
                  ]
               }
           ]
    }

}
const chartReducers=(state=INITIAL_STATE,action)=>{
    return state
}
export default chartReducers