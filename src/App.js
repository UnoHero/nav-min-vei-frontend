


import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import logo from './Pictures/logo.png';
import logo2 from './Pictures/logo_stor.png';
import login from './Enter.svg';
import search from './MagnifyingGlass.svg';
import menu from './MenuHamburger.svg';

import Footer from './footer.js';
import { Accordion } from "@navikt/ds-react";
import './App.css';
import Info from './Info.js';
import { ReadMore } from "@navikt/ds-react";
import { Button } from "@navikt/ds-react";



const Home = () => (
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
    <div className='align'>

            <div className='Over-dropdown-text'>
              <p className='b-text'>Lurer du på hva du kan ha rett på av hjelp og økonmisk
                <br/>
                støtte fra støtte fra det offentlige i Norge?
                <br/>
                Gjennom MinVeileder kan du utforske dette.
                </p>
            </div>
            <center>

            <div className='dropdown'>

                  <ReadMore header="Hva er MinVeileder">
                    Med helsemessige begrensninger mener vi funksjonshemming, sykdom,
                    allergier som hindrer deg i arbeidet eller andre årsaker som må tas hensyn
                    til når du skal finne nytt arbeid. Du må oppgi hva som gjelder for deg, og
                    dokumentere de helsemessige årsakene du viser til.
                  </ReadMore>
                  <ReadMore header="Hva kan MinVeileder hjelpe deg med?">
                    Med helsemessige begrensninger mener vi funksjonshemming, sykdom,
                    allergier som hindrer deg i arbeidet eller andre årsaker som må tas hensyn
                    til når du skal finne nytt arbeid. Du må oppgi hva som gjelder for deg, og
                    dokumentere de helsemessige årsakene du viser til.
                  </ReadMore>
            </div>
            </center>
            <div className='bottom-text'>
      <p className='b-text'>Det er viktig å understreke at MinVeileder kun kan foreslå<br />ytelser/tjenester du kan ha krav på. For å få endelig svar<br />må du sende inn en søknad.</p>
    </div>

    <div className="flex flex-wrap gap-2">
      <Button variant="primary">Start veilederen</Button>
      <Button variant="secondary">Få help med veilederen</Button>
    </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>


);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}


export default App;