import React, { useState } from 'react';
import { Accordion, Button, Radio, RadioGroup } from "@navikt/ds-react";
import './App.css';
import "@navikt/ds-css";

const Info = () => {
  // State variable to store the username
  const [username, setUsername] = useState('');

  // State variable to store user data
  const [userData, setUserData] = useState(null);

  // State variable to track if "Yes" is selected in the radio group
  const [isYesSelected, setIsYesSelected] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if "Yes" is selected and a username is provided
    if (isYesSelected && username.trim() !== '') {
      try {
        const response = await fetch(`http://localhost:3000/hent/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>    
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Hvorfor hente data</Accordion.Header>
          <Accordion.Content>
            ---- Forklaring her ---
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            Hvordan virker datasamlingen?
          </Accordion.Header>
          <Accordion.Content>
            ---- Forklaring her ---
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Hvem hentes infoen fra?</Accordion.Header>
          <Accordion.Content>
            <div className="radio-box">
              <RadioGroup
                legend="Ønsker du å hente data fra det offentlige?"
                onChange={(value) => setIsYesSelected(value === 'Yes')}
              >
                <label htmlFor="username">Brukernavn:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Radio value="Yes">Ja</Radio>
                <Radio value="No">Nei</Radio>
              </RadioGroup>
              <Button type="submit" variant='primary' disabled={!isYesSelected || username.trim() === ''}>
                Gå videre
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </form>
  );
};

export default Info;
