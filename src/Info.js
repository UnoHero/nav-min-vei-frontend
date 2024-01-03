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

  // State variable to track the selected version for each field
  const [selectedVersions, setSelectedVersions] = useState({});

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if "Yes" is selected and a username is provided
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
                <label htmlFor="userId">Brukernavn:</label>
                <input
                  type="text"
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <Radio value="Yes">Ja</Radio>
                <Radio value="No">Nei</Radio>
              </RadioGroup>
              <Button type="submit" variant='primary' disabled={!isYesSelected || userId.trim() === ''}>
                Gå videre
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        {userData && (
          <Accordion.Item>
            <Accordion.Header>Velg data-versjoner</Accordion.Header>
            <Accordion.Content>
              <ul>
                <li>
                  First Name:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, firstName: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.firstName.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.firstName.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.firstName.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Middle Name:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, middleName: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.middleName.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.middleName.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.middleName.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Last Name:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, lastName: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.lastName.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.lastName.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.lastName.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Country:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, country: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.country.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.country.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.country.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  City:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, city: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.city.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.city.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.city.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Postal Code:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, postalCode: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.postalCode.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.postalCode.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.postalCode.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Address:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, address: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.address.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.address.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.address.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Relations:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, relations: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.relations.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.relations.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData.relations.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Gross Income:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, grossIncome: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.grossIncome}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.grossIncome}</Radio>
                    <Radio value="aaReg">AA-register: {userData.grossIncome}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Insurance:
                  <RadioGroup
                    onChange={(value) => setSelectedVersions({ ...selectedVersions, insurance: value })}
                  >
                    <Radio value="skatt">Skatt: {userData.insurance}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData.insurance}</Radio>
                    <Radio value="aaReg">AA-register: {userData.insurance}</Radio>
                  </RadioGroup>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        )}
        {Object.keys(selectedVersions).length > 0 && (
          <Accordion.Item>
            <Accordion.Header>Valgte Data</Accordion.Header>
            <Accordion.Content>
              <ul>
                {Object.keys(selectedVersions).map((field) => (
                  <li key={field}>
                    {field}: {userData[field][selectedVersions[field]]}
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        )}
      </Accordion>
    </form>
  );
};

export default Info;
