import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
const Header=()=>{
    return(
        <React.Fragment>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" >
              <Link className="nav-link text-white" to="/">
              <img src="covid19 .jpg" width="40" height="40" alt="" 
              className="d-inline-block align-top"
              loading="lazy"/>
              <div style={{marginLeft:'50px',top:'20px',position:'absolute',fontSize:'22px'}}>
             <strong> COVID 19 TRACKER</strong>
              </div>
              

              </Link>
                

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <Link class="nav-link" to="/pakistan">
       PAKISTAN
      </Link>
      <Link class="nav-link" to="/india">
       INDIA
      </Link>
      <Link class="nav-link" to="/china">
       CHINA
      </Link>
      <Link class="nav-link" to="/america">
       AMERICA
      </Link>
      <Link class="nav-link" to="/russia">
       RUSSIA
      </Link>
      <Link class="nav-link" to="/afghanistan">
      AFGHANISTAN
      </Link>
      <Link class="nav-link" to="/egypt">
       EGYPT
      </Link>
      <Link class="nav-link" to="/southafrica">
       SOUTH AFRICA
      </Link>  
     
    </ul>
    <div >
    <Link class="nav-link" to="/allcountries">
       <button className="btn btn-danger " style={{fontWeight:'bold'}}>SHOW ALL COUNTRIES</button>
      </Link>
      </div>
  
  </div>
</nav>

</div>
</React.Fragment>
    )
}
export default Header