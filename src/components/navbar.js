import React from 'react';
import logo from '../Pictures/norge.no logo.png';
import login from '../Pictures/Enter.svg';
import search from '../Pictures/MagnifyingGlass.svg';
import menu from '../Pictures/MenuHamburger.svg';
import "../header.css"; // Forsikre deg om at stien er riktig

function Navbar() {
  return (
    <header className="App-header">
      <img src={logo} alt="norge.no logo" className="App-logo" />

      <nav className="App-navigation">
        <a href="#minveileder" className="nav-link">Privat</a>
        <a href="#livssituasjon" className="nav-link">Arbeidsgiver</a>
        <a href="#samarbeidspartner" className="nav-link">Samarbeidspartner</a>
      </nav>

      <div className="App-header-actions">
        <button className="button" aria-label="Meny">
          <img src={menu} alt="" className="icon" /> Meny
        </button>
        <button className="button" aria-label="Søk">
          <img src={search} alt="" className="icon" /> Søk
        </button>
        <button className="button" aria-label="Logg inn">
          <img src={login} alt="" className="icon" /> Logg inn
        </button>
      </div>
    </header>
  );
}


export default Navbar;
