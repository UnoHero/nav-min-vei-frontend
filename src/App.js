import React from 'react';
import logo from './Pictures/logo.png'; // Your logo file
import logo2 from './Pictures/logo_stor.png'; // Your logo file
import login from './Enter.svg';
import search from './MagnifyingGlass.svg';
import menu from './MenuHamburger.svg';



import './App.css';

function App() {
  return (
    <><div className="App">
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
        <p>Lurer du på hva du kan ha rett på av hjelp og økonomisk støtte fra det offentlige i Norge?
        <br/>
        Gjennom min veileder kan du utforske dette. </p>

        </center>
     </>

  );
}


export default App;
