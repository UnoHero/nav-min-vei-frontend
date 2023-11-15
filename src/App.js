import React from 'react';
import logo from './Pictures/logo.png'; // Your logo file
import logo2 from './Pictures/logo_stor.png'; // Your logo file
import login from './Enter.svg';
import search from './MagnifyingGlass.svg';
import menu from './MenuHamburger.svg';

import pilned from "./pilned.svg";
import "./dropdown.js";
import './App.css';
import AccordionItem from './AccordionItems.js';



function App() {
  return (
    <><><><div className="App">
      <header className="App-header">
        <img src={logo} alt="MinVei Logo" className="App-logo" />

        <nav className="App-navigation">
          <a href="#minveileder" className="nav-link">MinVeileder</a>
          <a href="#livssituasjon" className="nav-link">Livssituasjon</a>
          <a href="#samarbeidspartner" className="nav-link">Samarbeidspartner</a>
        </nav>

        <div className="App-header-actions">
          <button className="button menu-button"> <img src={menu} className="icon" />Meny</button>
          <button className="button search-button"> <img src={search} className="icon" />Søk</button>
          <button className="button login-button"> <img src={login} className="icon" /> Logg inn</button>
        </div>
      </header>




      {/* Section for 'MinVeiLeder' */}
      <section className="firstsection">
        <center>
          <img src={logo2} alt="MinVei Logo" className="logo" width="25%" height="10%" />
        </center>
      </section>
    </div>
      <center className='p-tekst'>
        <p>Lurer du på hva du kan ha rett på av hjelp og økonomisk
           <br />
           støtte fra det offentlige i Norge?
          <br />
          Gjennom min veileder kan du utforske dette. </p>
      </center>


      {/* dropdown buttons*/}



       <div class="accordion">
        <div class="accordion-item">
          <p class="accordion-header">Hva kan min veileder hjelpe med?</p>
          <div class="panesl">
            <p>Detaljert informasjon om hva veilederen kan hjelpe med.</p>
          </div>
        </div>

        <div class="accordion-item">
          <p class="accordion-header"><img src={pilned} /> er min veileder?</p>
          <div class="panel">
            <p>Informasjon om veilederens rolle og funksjoner.</p>
          </div>
        </div>
      </div> 




      {/*code for bottom text and buttons under the dropdown buttons*/}
      
    </><div className='bottom-text'>
        <p className='b-text'>Det er viktig å understreke at MinVeileder kun kan foreslå
          <br />
          ytelser/tjenester du kan ha krav på. For å få endelig svar
          <br />
          må du sende inn en søknad.</p>
      </div>

      </><div>
        <button className='start-veileder'><b>Start veilederen</b></button>   <button className='help-b'><b>Få hjelp med veileder</b></button>
        </div></>

  );
}


export default App;