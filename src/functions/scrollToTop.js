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
        <button className='scrollUpButton' onClick={this.scrollToTop}><ArrowUpIcon title="a11y-title" fontSize="1.5rem" />Til toppen</button>
      </div>
    );
  }
}

export default ScrollToTop;
