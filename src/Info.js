import React, { useState } from 'react';
import { Accordion, Button, Radio, RadioGroup } from "@navikt/ds-react";
import './App.css';
import "@navikt/ds-css";

const Info = () => {
  // State variable to store the username
  const [userId, setUserId] = useState('');

  // State variable to store user data
  const [userData, setUserData] = useState(null);

  // State variable to track if "Yes" is selected in the radio group
  const [isYesSelected, setIsYesSelected] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if "Yes" is selected and a username is provided
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        setUserData(data);
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
  };

  return ( 
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
                <Radio value="Yes">Ja</Radio>
                <Radio value="No">Nei</Radio>
                {isYesSelected && 
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="userId">ID:</label>
                    <input
                      required
                      type="number"
                      id="userId"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </form>
                }
              </RadioGroup>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
  );
};

export default Info;
