import React from 'react'
import {Pie} from 'react-chartjs-2'
import { connect } from 'react-redux'
const Chart3=({chartData})=>{
    console.log('this is chart3 data' ,chartData)
    return(
        <div>
         <Pie
         data={chartData}
         options={{
             legend:{
                 display:true,
                 position:'right'
             }
         }}
         />
        </div>
    )
}
const mapStateToProps=state=>({
    chartData:state.chart3.chartData
})
export default connect(mapStateToProps) (Chart3)