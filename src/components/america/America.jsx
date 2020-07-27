import React from 'react';
// import './Dashboard.css'
import { connect } from 'react-redux';
import CardList from '../cardlist/CardList';
import Chart from '../chart/Chart'
import Chart2 from '../chart2/Chart2';
import Chart3 from '../chart3/Chart3';
const America=({data})=>{
    console.log('this is cases',data)
    return(
        <div className="display">
        <div className="main">
            <img src="covid-19.jpg" className="image" alt="" />
            <div className="heading">
             <h3>BOOTCAMP 2020 PROJECT 2 <span>COVID 19 TRACKER</span></h3>
            </div>
        </div>
        <div className="sub-heading">
           <h2 style={{color:"#900c3f"}}> GLOBAL CONDITION OF AMERICA</h2>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-sm-10">
            <Chart/>
            </div>

        </div>
        <div className='row justify-content-center mt-5'>
        {
            data.map(dat=>(
               <div  className="col-xs-1 ml-3 mt-3">
                 <CardList data={dat}/>
               </div>
            ))
        }

        </div>
       <div className="second-heading">
           <h2 style={{color:"#900c3f"}}>GRAPHICAL CONDITION OF CASES</h2>
       </div>
       <div className="row justify-content-center mt-4">
           <div className="col-sm ">
           <Chart2/>
           </div>
           <div className="col-sm mt-3">
            <Chart3/>
           </div>

       </div>
       <footer>
           <div className="footer" >
           
           <h5>COVID-19</h5>
         
         
           </div>
          

       </footer>
       
        </div>
        
    )
}
const mapStateToProps=state=>{
    return{
        data:state.case.data
    }
}
export default connect(mapStateToProps)(America)