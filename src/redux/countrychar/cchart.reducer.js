const INITIAL_STATE={
    chartData:{
           datasets:[
               {
                
                data:[
                    4567790,
                    0,
                    1567777,
                    0  
                ],
                backgroundColor:[
                   
                    'orange',
                    'blue',
                    'pink',
                    'green',
                    
                  ]
               }
           ]
    }
}
const cchartReducer=(state=INITIAL_STATE,action)=>{
    return state
}
export default cchartReducer