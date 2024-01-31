  // Secker er best siden han kom til 100 først - sitat Senator 2021@

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "@navikt/ds-css";
import Section from '../components/section';
import Main from '../components/Info_main';
import { config } from 'react-spring';



const Info = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Section />
      <Main />



      <div>
        <Footer />
      </div>
      </div>
  );
};

export default Info;