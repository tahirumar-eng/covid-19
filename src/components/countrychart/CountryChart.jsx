import React from 'react'
import {Pie} from 'react-chartjs-2'
import { connect } from 'react-redux'
const CountryChart=({chartData})=>{
    return(
        <div>
            <Pie
             data={chartData}
             options={{
                 
             }}
             
            />
      
        </div>
    )
}
const mapStateToProps=state=>({
    chartData:state.cchart.chartData
})
export default connect(mapStateToProps) (CountryChart)