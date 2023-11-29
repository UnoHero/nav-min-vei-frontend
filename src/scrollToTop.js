import React from 'react';
import './App.css';


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
        <button className='scrollUpButton' onClick={this.scrollToTop}>Til toppen</button>
      </div>
    );
  }
}

export default ScrollToTop;
