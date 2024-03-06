import React from 'react';
import { ArrowUpIcon } from '@navikt/aksel-icons';

class ScrollToTop extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className='scrollUp'>
        {/* Link to go to the top of the page */}
        <button className='scrollUpButton' onClick={this.scrollToTop}>
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img">
            <path 
              d="M12.53 4.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06l3.22-3.22V19a.75.75 0 0 0 1.5 0V6.81l3.22 3.22a.75.75 0 1 0 1.06-1.06l-4.5-4.5Z" 
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2" // Juster denne verdien for å gjøre ikonet tykkere eller tynnere
            ></path>
          </svg>
          Til toppen
        </button>
      </div>
    );
  }
}

export default ScrollToTop;
