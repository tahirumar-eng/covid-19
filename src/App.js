import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Pak from './pages/pak/Pak';
import Ind from './pages/ind/Ind';
import Chi from './pages/chi/Chi';
import Ameri from './pages/ameri/Ameri';
import Russi from './pages/russi/Russi';
import Afgha from './pages/afgha/Afgha';
import Egy from './pages/egy/Egy';
import South from './pages/south/South';
import AllCoun from './pages/allcoun/AllCoun';


function App() {
  return (
    <div className="App">
    <Header/>
    
    <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route  path="/pakistan" component={Pak}/>
    <Route path="/india" component={Ind}/>
    <Route path="/china" component={Chi}/>
    <Route path="/america" component={Ameri}/>
    <Route path="/russia" component={Russi}/>
    <Route path="/afghanistan" component={Afgha}/>
    <Route path="/egypt" component={Egy}/>
    <Route path="/southafrica" component={South}/>
    <Route path="/allcountries" component={AllCoun}/>
    </Switch>
    
    </div>
  );
}

export default App;
