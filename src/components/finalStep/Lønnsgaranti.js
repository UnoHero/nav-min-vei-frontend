import styled from 'styled-components';

import AltinnLogo from '../../Pictures/FinalStep/AltinnLogo.svg';
import LønnsgarantiImage from "../../Pictures/FinalStep/Lønnsgaranti.svg"

const FinalBox = styled.div`
  width: 200px;
  border-radius: 2px;
  background-color: #ffffff; 
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 20px;
`;

// The text on the top that says which type of benefit it is
const HeadText = styled.p`
font-size: 12px;
padding: 2%;
white-space: nowrap;
margin-right: 2%;
`;

const HeadText2 = styled.p`
font-size: 12px;
white-space: nowrap;
margin-right: 2%;
`;

// The big image in the middle
const BigImage = styled.img`
`;

// The image that shows which company offers this benefit
const FinalBoxIcon = styled.img`
padding-left: 20%;
margin-top: 6%;
margin-left: 5%;
`;

const List = styled.ul`
  position: relative;
  list-style-image: url("../../Pictures/FinalStep/CheckmarkCircleFill.svg");
`
const ListItem = styled.li`
  position: relative;
  display: flex;
`
const ListIcon = styled.div`
  position: absolute;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  top: 50%;
  left: -20%;
  font-size: 20px;
`
const ListText = styled.div`
  font-size: 1rem;
  margin: 4px 0;
`

// Text for which criteria you fulfill
const UnderText = styled.h1`
  color: black;
  font-size: 16px;
  text-align: left;
  margin-left: 3%;
`;

const Lønnsgaranti = () => {
    const altinnText = 'ALTINN';
    
    return(
        <FinalBox>
            <HeadText>INFO FRA {altinnText} <FinalBoxIcon src={AltinnLogo} alt='Altinn logo'/> </HeadText> 
            <BigImage src={LønnsgarantiImage} alt='Lønnsgaranti logo' />
            <UnderText>Starte og registrere enkeltpersonforetak</UnderText>
            <ListText>Her får du vite hva som kreves for å starte et enkeltpersonforetak, og hvordan du går frem når du skal registrere foretaket.</ListText>
        </FinalBox>
    )
}

export default Lønnsgaranti