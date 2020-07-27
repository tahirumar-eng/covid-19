import React from 'react'
import {Bar} from 'react-chartjs-2'
import { connect } from 'react-redux'
const Chart2=({chartData})=>{
    return(
        <div>
         <Bar
         data={chartData}
         options={{
             legend:{
                 display:true,
                 position:"right"
             }
         }}
         />
        </div>
    )
}
const mapStateToProps=state=>({
    chartData:state.chart2.chartData
})
export default connect(mapStateToProps) (Chart2)