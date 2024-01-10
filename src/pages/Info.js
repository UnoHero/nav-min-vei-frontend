import React, { useState } from 'react';
import { Accordion, Button, Radio, RadioGroup } from "@navikt/ds-react";
import Head from '../components/header';
import Footer from '../components/footer';
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

  // Error message state
  const [errMsg, setErrMsg] = useState (null);

  // Function to handle form submission and fetching data
  const handleDataFetch = async () => {
    if (isYesSelected && userId.trim() !== '') {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        if (!response.ok) {
          setErrMsg(data.error);
        }
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
    <div>

      <div>
        <Head />
      </div>
      
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
                    {errMsg && <h3>{errMsg}</h3>}
                    <label htmlFor="userId">ID:</label>
                    <input
                      required
                      type="number"
                      id="userId"
                      value={userId}
                      onChange={(e) =>{
                        if(/^\d*$/.test(e.target.value)){
                          setUserId(e.target.value)}
                        }
                      }  
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
                <li>
                  First Name:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('firstName', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.firstName?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.firstName?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.firstName?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Middle Name:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('middleName', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.middleName?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.middleName?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.middleName?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Last Name:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('lastName', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.lastName?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.lastName?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.lastName?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Country:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('country', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.country?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.country?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.country?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  City:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('city', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.city?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.city?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.city?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Postal Code:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('postalCode', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.postalCode?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.postalCode?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.postalCode?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Address:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('address', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.address?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.address?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.address?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Relations:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('relations', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.relations?.skatt}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.relations?.folkReg}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.relations?.aaReg}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Gross Income:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('grossIncome', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.grossIncome}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.grossIncome}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.grossIncome}</Radio>
                  </RadioGroup>
                </li>
                <li>
                  Insurance:
                  <RadioGroup
                    onChange={(value) => handleVersionSelection('insurance', value)}
                  >
                    <Radio value="skatt">Skatt: {userData?.insurance}</Radio>
                    <Radio value="folkReg">Folkeregister: {userData?.insurance}</Radio>
                    <Radio value="aaReg">AA-register: {userData?.insurance}</Radio>
                  </RadioGroup>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Valgte data</Accordion.Header>
            <Accordion.Content>
              <ul>
                {Object.keys(selectedVersions).map((field) => (
                  <li key={field}>
                    {field}: {userData?.[field]?.[selectedVersions[field]]}
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </>
      )}
      </Accordion>

      <div>
        <Footer />
      </div>
      </div>


  );


};

export default Info;
