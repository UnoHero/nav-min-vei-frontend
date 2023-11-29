import React from 'react';
import logo from './Pictures/logo.png';
import logo2 from './Pictures/logo_stor.png';
import login from './Enter.svg';
import search from './MagnifyingGlass.svg';
import menu from './MenuHamburger.svg';
import pilned from "./pilned.svg";


import Footer from './footer.js';
import "./dropdown.js";
import './App.css';
import setupAccordion from './AccordionItems.js';
import AccordionItem from './AccordionItems.js';

function App() {
  return (
    <div className="App">
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

      <section className="firstsection">
        <center>
          <img src={logo2} alt="MinVei Logo" className="logo" width="25%" height="10%" />
        </center>
      </section>

      <center className='p-tekst'>
        <p>Lurer du på hva du kan ha rett på av hjelp og økonomisk<br />støtte fra det offentlige i Norge?<br />Gjennom min veileder kan du utforske dette.</p>
      </center>

      <div className="accordion">
        <div className="accordion-item">
          <p className="accordion-header">Hva kan min veileder hjelpe med?</p>
          <div className="panel">
            <p>Detaljert informasjon om hva veilederen kan hjelpe med.</p>
          </div>
        </div>

        <div className="accordion-item">
          <p className="accordion-header"><img src={pilned} /> er min veileder?</p>
          <div className="panel">
            <p>Informasjon om veilederens rolle og funksjoner.</p>
          </div>
        </div>
      </div>

      <div className='bottom-text'>
        <p className='b-text'>Det er viktig å understreke at MinVeileder kun kan foreslå<br />ytelser/tjenester du kan ha krav på. For å få endelig svar<br />må du sende inn en søknad.</p>
      </div>

      <div>
        <button className='start-veileder'><b>Start veilederen</b></button>  
        <button className='help-b'><b>Få hjelp med veileder</b></button>
      </div>
        
      <div>
        <Footer></Footer>
      </div>


    </div>
  );
}

export default App;
