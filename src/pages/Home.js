import Navbar from '../components/navbar.js';
import Section from '../components/section.js';
import Dropdown from '../components/dropdown.js';
import HomeButtons from '../components/homepage_buttons.js';
import Footer from '../components/footer.js';
<link rel="icon" href="../public/ronaldo.png" />




const Home = () => (
    <div className="App">
      <Navbar />
  
      <Section />
      <div className='align'>
  
              <div className='Over-dropdown-text'>
                <p className='b-text'>Lurer du på hva du kan ha rett på av hjelp og økonmisk
                  <br/>
                  støtte fra støtte fra det offentlige i Norge?
                  <br/>
                  Gjennom MinVeileder kan du utforske dette.
                  </p>
              </div>

              <Dropdown />

              <div className='bottom-text'>
        <p className='b-text'>Det er viktig å understreke at MinVeileder kun kan foreslå<br />ytelser/tjenester du kan ha krav på. For å få endelig svar<br />må du sende inn en søknad.</p>
      </div>
      <HomeButtons />
      </div>

      <div>
        <Footer></Footer>
      </div>
      </div>
  );

  export default Home;
