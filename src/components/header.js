import React from 'react';
import logo from '../Pictures/logo.png';
import logo2 from '../Pictures/logo_stor.png';
import login from '../Pictures/Enter.svg';
import search from '../Pictures/MagnifyingGlass.svg';
import menu from '../Pictures/MenuHamburger.svg';

class Head extends React.Component {
  render() {
    return (
      <header className="App-header">
        {/* Assuming you have imported 'logo', 'menu', 'search', and 'login' */}
        <img src={logo} alt="MinVei Logo" className="App-logo" />

        <nav className="App-navigation">
          <a href="#minveileder" className="nav-link">
            MinVeileder
          </a>
          <a href="#livssituasjon" className="nav-link">
            Livssituasjon
          </a>
          <a href="#samarbeidspartner" className="nav-link">
            Samarbeidspartner
          </a>
        </nav>

        <div className="App-header-actions">
          <button className="button menu-button">
            {' '}
            <img src={menu} className="icon" />
            Meny
          </button>
          <button className="button search-button">
            {' '}
            <img src={search} className="icon" />
            Søk
          </button>
          <button className="button login-button">
            {' '}
            <img src={login} className="icon" />
            Logg inn
          </button>
        </div>
      </header>
    );
  }
}

export default Head;
