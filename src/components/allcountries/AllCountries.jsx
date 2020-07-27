import React from 'react';
// import './Dashboard.css'
import { connect } from 'react-redux';
import CardList from '../cardlist/CardList';
import Chart from '../chart/Chart'
import Chart2 from '../chart2/Chart2';
import Chart3 from '../chart3/Chart3';
import CountryList from '../countrylist/CountryList';
const AllCountries=({allcases})=>{
   alert('press ctrlf to find country')
    return(
        
        <div className="display">
        <div className="main">
            <img src="covid-19.jpg" className="image" alt="" />
            <div className="heading">
             <h3>BOOTCAMP 2020 PROJECT 2 <span>COVID 19 TRACKER</span></h3>
            </div>
        </div>
        <div className="sub-heading">
           <h2 style={{color:"#900c3f"}}> GLOBAL CONDITION OF COVID-19</h2>
        </div>
        
        <div className='row justify-content-center mt-5'>
        {
            allcases.map(al=>(
               <div  className="col-xs-1 ml-3 mt-3">
                    <CountryList all={al}/>   
               </div>
            ))
        }

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
        allcases:state.all.allcases
    }
}
export default connect(mapStateToProps)(AllCountries)