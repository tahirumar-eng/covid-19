import React from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2'
import { connect } from 'react-redux';
const Chart=({chartData})=>{
    console.log('chart data' , chartData)
    return(
        <div>
          <Bar
          
          data={chartData}
          options={{
             title:{
                 display:true,
                 text:'CORONA CASES',
                 fontSize:25
             },
            
             
          }}
          />
        </div>
    )
}
const mapStateToProps=state=>({
    chartData:state.chart.chartData
})
export default connect(mapStateToProps) (Chart)