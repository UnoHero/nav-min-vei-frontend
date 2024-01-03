import React, { useState } from 'react';
import { Accordion, Button, Radio, RadioGroup } from "@navikt/ds-react";
import './App.css';
import "@navikt/ds-css";

const Info = () => {
  // State variable to store the user ID
  const [userId, setUserId] = useState('');

  // State variable to store user data
  const [userData, setUserData] = useState(null);

  // State variable to track if "Yes" is selected in the radio group
  const [isYesSelected, setIsYesSelected] = useState(false);

  // State variable to track the selected version for each field
  const [selectedVersions, setSelectedVersions] = useState({});

  // Norwegian labels for fields
  const norwegianLabels = {
    firstName: "Fornavn",
    middleName: "Mellomnavn",
    lastName: "Etternavn",
    country: "Land",
    city: "By",
    postalCode: "Postnummer",
    address: "Adresse",
    relations: "Relasjoner",
    grossIncome: "Bruttoinntekt",
    insurance: "Forsikring",
  };

  // Function to handle form submission and fetching data
  const handleDataFetch = async () => {
    if (isYesSelected && userId.trim() !== '') {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  // Function to handle selection of data versions
  const handleVersionSelection = (field, value) => {
    setSelectedVersions((prevVersions) => ({
      ...prevVersions,
      [field]: value,
    }));
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
              {isYesSelected && (
                <div>
                  <label htmlFor="userId">ID:</label>
                  <input
                    required
                    type="number"
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="primary"
                    onClick={handleDataFetch}
                    disabled={!isYesSelected || userId.trim() === ''}
                  >
                    Gå videre
                  </Button>
                </div>
              )}
            </RadioGroup>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      {userData && (
        <>
          <Accordion.Item>
            <Accordion.Header>Datavalg</Accordion.Header>
            <Accordion.Content>
              <ul>
                {Object.keys(norwegianLabels).map((field) => (
                  <li key={field}>
                    {norwegianLabels[field]}:
                    <RadioGroup
                      onChange={(value) => handleVersionSelection(field, value)}
                    >
                      <Radio value="skatt">Skatt: {userData?.[field]?.skatt}</Radio>
                      <Radio value="folkReg">Folkeregister: {userData?.[field]?.folkReg}</Radio>
                      <Radio value="aaReg">AA-register: {userData?.[field]?.aaReg}</Radio>
                    </RadioGroup>
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Valgte data</Accordion.Header>
            <Accordion.Content>
              <ul>
                {Object.keys(selectedVersions).map((field) => (
                  <li key={field}>
                    {norwegianLabels[field]}: {userData?.[field]?.[selectedVersions[field]]}
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </>
      )}
    </Accordion>
  );
};

export default Info;
