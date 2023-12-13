import React from 'react';
import logo from './Pictures/logo.png'; // Your logo file
import logo2 from './Pictures/logo_stor.png'; // Your logo file
import login from './Enter.svg';
import search from './MagnifyingGlass.svg';
import menu from './MenuHamburger.svg';
import "@navikt/ds-css"
import pilned from "./pilned.svg";
import Footer from'./footer.js';
import { ReadMore } from "@navikt/ds-react";
import './App.css';
import { Accordion } from "@navikt/ds-react";
import { Button } from "@navikt/ds-react";





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


<div className = "centerdown">
    <ReadMore header="Hva er MinVeileder?">
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
      {/*code for bottom text and buttons under the dropdown buttons*/}
      
    </><div className='bottom-text'>
        <p className='b-text'>Det er viktig å understreke at MinVeileder kun kan foreslå
          <br />
          ytelser/tjenester du kan ha krav på. For å få endelig svar
          <br />
          må du sende inn en søknad.</p>
            </div>
            <div classname="knapp">
              
      {
(() => {
    const Example = () => {
    return (<div className="flex flex-wrap gap-2">
      <Button variant="primary">Start veileder</Button>
      <Button variant="secondary">Få hjelp med velederen</Button>
    </div>);
};

    return <Example />
  })()
}
</div>

      </><div>
        </div></>

  );

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

    <center>
          <div className="centerdown">
            <Accordion>
              <Accordion.Item>
                <Accordion.Header>Til deg som er mellom 62 og 67 år</Accordion.Header>
                <Accordion.Content>
                  Hvis du er mellom 62 og 67 år når du søker, må du som hovedregel ha
                  hatt en pensjonsgivende inntekt som tilsvarer x G, året før du fikk
                  nedsatt arbeidsevnen. NAV kan gjøre <a href="#Unntak">unntak</a>.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>Til deg som har yrkesskade eller yrkessykdom</Accordion.Header>
                <Accordion.Content>
                  Med yrkesskade mener vi at du har fått en skade som følge av en
                  arbeidsulykke. Vi kan godkjenne en sykdom som yrkessykdom hvis den
                  kommer av skadelig påvirkning fra arbeidsmiljøet.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>Til deg som er helt frisk</Accordion.Header>
                <Accordion.Content>
                  Da er det lite som trengs å gjøres.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </div>
        </center>

    <div className='bottom-text'>
      <p className='b-text'>Det er viktig å understreke at MinVeileder kun kan foreslå<br />ytelser/tjenester du kan ha krav på. For å få endelig svar<br />må du sende inn en søknad.</p>
    </div>

    <div>
      <button className='start-veileder'><Link to="/info"><b>Start veilederen</b></Link></button>
      <button className='help-b'><b>Få hjelp med veileder</b></button>
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