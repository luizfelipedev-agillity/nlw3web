import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Landing from './pages/landing';
import Orphanegermap from './pages/orphanegermap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes(){
    return(
        <BrowserRouter>
           < Route  path="/" exact component={Landing}/>
           < Route  path="/app" exact component={Orphanegermap}/>
           < Route  path="/orphanages/create" exact component={CreateOrphanage}/>
           < Route  path="/Orphanages/:id" exact component={Orphanage}/>           
        </BrowserRouter>
    );   
}

export default Routes;






