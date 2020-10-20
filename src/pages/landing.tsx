import React from 'react';
import '../styles/pages/landing.css';
import '../styles/global.css';
import logoimg from '../imagens/Logo.svg';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

function Landing(){
return(
    <div id ='page-landing' className="App">    
      <div className="content-wrapper">
          <img src={logoimg} alt="Logo da aplicação"/>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>      
          </main>

          <div className="location">
            <strong>
              Guarulhos
            </strong>
            <span>
              São Paulo
            </span>
          </div>
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link> 
      </div>
    </div>
);
}

export default Landing;