import React, { useState } from 'react';
import { Accordion, Button, Radio, RadioGroup } from "@navikt/ds-react";
import './App.css';
import "@navikt/ds-css";


const Info = () => {
  // State variables to store form data
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');
  const [part4, setPart4] = useState('');

  console.log('Info component rendered!');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form data as needed, for example, send it to a server

    // Reset the form after submission
    setPart1('');
    setPart2('');
    setPart3('');
    setPart4('');
  };

return(
    <form>
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>Hvorfor hente data</Accordion.Header>
        <Accordion.Content>
        ---- Forklaring her ---
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>
          Hvordan viker datasamlingen?
        </Accordion.Header>
        <Accordion.Content>
          ---- Forklaring her ---
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Hvem hentes infoen fra?</Accordion.Header>
        <Accordion.Content>
          <div className = "radio-box">
            <RadioGroup
            legend = "Ønsker du å hente data fra det ofentlige?"

            >
             <Radio value="Yes">Ja</Radio>
             <Radio value="No">Nei</Radio>   
            </RadioGroup>
            <Button variant='primary'>Gå videre</Button>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
    </form>
)
};

export default Info;