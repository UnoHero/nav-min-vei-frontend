import React, {useState} from 'react';
import "@navikt/ds-css";
import { Accordion } from "@navikt/ds-react";
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { config } from 'react-spring';



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const WhiteBox = styled(animated.div)`
  width: 66.666%;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartVeilederButton = styled(animated.button)`
  background-color: #007b8e;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  opacity: ${(props) => props.opacity};
  transition: opacity 300ms;
`;

const CheckBoxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  color: #007b8e;
`;

const Main = () => {

    const [userId, setUserId] = useState('');

    // State variable to store user data
    const [userData, setUserData] = useState(null);
  
    // State variable to track if "Yes" is selected in the radio group
    const [isYesSelected, setIsYesSelected] = useState(false);
  
    // State variable to track the selected version for each field
    const [selectedVersions, setSelectedVersions] = useState({});
  
    const [height, setHeight] = useState('auto'); // Sett en initialverdi etter behov
  
    const [showCheckboxes, setShowCheckboxes] = useState(false);
  
    const [buttonProps, setButtonProps] = useSpring(() => ({
      opacity: 0,
      config: config.gentle,
    }));

    const startVeileder = () => {
        setShowCheckboxes(true);
        setButtonProps({ opacity: 1 });
        // Sett height eller andre relevante states om nødvendig
        // Legg til andre handlinger som er nødvendige for å starte veilederprosessen
      };

      const handleDataFetch = async () => {
        if (isYesSelected && userId.trim() !== '') {
          try {
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            const data = await response.json();
            setUserData(data);
            console.log(data)
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

  
        return(
            <Container>
            <WhiteBox style={{ height }}>
              <h1>Ditt innhold her</h1>
              {!showCheckboxes && (
                <StartVeilederButton onClick={startVeileder} opacity={buttonProps.opacity}>
                  Start veiledar
                </StartVeilederButton>
              )}
              {showCheckboxes && (
                <Accordion>
                  <Accordion.Item>
                    <Accordion.Header>Til deg som er mellom 62 og 67 år</Accordion.Header>
                    <Accordion.Content>
                      Hvis du er mellom 62 og 67 år når du søker, må du som hovedregel ha
                      hatt en pensjonsgivende inntekt som tilsvarer x G, året før du fikk
                      nedsatt arbeidsevnen. NAV kan gjøre <a href="#Unntak">unntak</a>.
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>
                      Til deg som har yrkesskade eller yrkessykdom
                    </Accordion.Header>
                    <Accordion.Content>
                      Med yrkesskade mener vi at du har fått en skade som følge av en
                      arbeidsulykke. Vi kan godkjenne en sykdom som yrkessykdom hvis den
                      kommer av skadelig påvirkning fra arbeidsmiljøet.
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>Til deg som er helt frisk</Accordion.Header>
                    <Accordion.Content>
                      Da er det lite som trengs å gjøres.
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion>
              )}
            </WhiteBox>
          </Container>
        );
    }



export default Main;