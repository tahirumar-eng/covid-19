import React from 'react'
import CountryChart from '../countrychart/CountryChart'
const CountryList=({all})=>{
    const{img,country,totalcases,totalrecovered,newcase,newdeaths}=all
    return(
        <div>
            <div class="card" style={{width: "25rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
   <div class="card-body">
    
    <h5 class="card-title text-center" 
    style={{fontWeight:"bold"}}>
        {country}
    </h5> 
 
  <div class="all-data" style={{marginTop:"50px"}}>

  <strong> TOTAL CASES</strong> 
  
  <h4 class="card-text " 
  style={{color:"orange",fontSize:'30px',fontWeight:"bold"}}>
    {totalcases}
  </h4> 
  
  <div className="card-data" style={{marginTop:'20px'}}>
  
  <strong > TOTAL RECOVERED</strong> 
  
  <h4 class="card-text " 
  style={{color:"Blue",fontSize:'30px',fontWeight:"bold"}}>
    {totalrecovered}
  </h4> 
 
  </div>
  <div className="card-data" style={{marginTop:'20px'}}>
  
 <h6 style={{fontWeight:"bold" ,fontSize:"13px"}}> NEW CASES TODAY</h6>
  
  <h4 class="card-text " 
  style={{color:"pink",fontSize:'15px'}}>
    {newcase}
  </h4> 
 
  </div>
  <div className="card-data" style={{marginTop:'20px'}}>
  
 <h6 style={{fontWeight:"bold" ,fontSize:"13px"}}> NEW DEATHS TODAY</h6>
  
  <h4 class="card-text " 
  style={{color:"green",fontSize:'15px'}}>
    {newdeaths}
  </h4> 
 
  </div>
  <div >
       <CountryChart/>
  </div>
  </div>
  </div>
</div>

        </div>
    )
}
export default CountryList