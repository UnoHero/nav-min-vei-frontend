import Navbar from '../components/navbar.js';
import Section from '../components/section.js';
import HomeButtons from '../components/homepage_buttons.js';
import Footer from '../components/footer.js';
import '../home.css'; // Import the CSS file

const Home = () => (
    <div className="App">
        <Navbar />
        <div className='content-container'>
            <div className='white-box'>
            <Section />
                <p className='intro-text'>
                    Velkommen til MinVeileder. <br />
                    Lurer du på hva du kan ha krav på av offentlige ytelser? <br />
                    Gjennom MinVeileder kan du utforske hva du kan ha krav på.
                </p>
                <HomeButtons />
                
            </div>
            
        </div>
        <Footer />
    </div>
);

export default Home;
