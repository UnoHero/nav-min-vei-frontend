import React from 'react';
import logo2 from '../Pictures/logo_stor.png';

class Section extends React.Component {
    render() {
        return ( 
            <section className="firstsection">
                 <center>
                    <img src={logo2} alt="MinVei Logo" className="logo" width="25%" height="10%" />
                 </center>
            </section>
         );

    }
    
}
 
export default Section;
