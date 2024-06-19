import styled from 'styled-components';

import NavLogo from '../../Pictures/FinalStep/NavLogo.svg';
import PleiePengerImage from "../../Pictures/FinalStep/PleiePenger.svg"

import { TextBox, StepTitle, StepText, } from "../../components/styledComponents"
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

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

const PleiePenger = () => (
  <FinalBox>
    <HeadText>PENGESTØTTE FRA NAV <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText>
    <BigImage src={PleiePengerImage} alt='Pleie penger logo' />
    <UnderText>Dagpenger</UnderText>
    <List>
      <ListItem>
        <ListIcon>
          <CheckmarkCircleFillIcon color='green'/>
        </ListIcon>
        <ListText>Oppholder deg i Norge og medlem av folketrygden</ListText>
      </ListItem>
      <ListItem>
        <ListIcon>
          <CheckmarkCircleFillIcon color='green'/>
        </ListIcon>
        <ListText>Du er en reell arbeidssøker</ListText>
      </ListItem>
      <ListItem>
        <ListIcon>
          <CheckmarkCircleFillIcon color='green'/>
        </ListIcon>
        <ListText>Mistet minst 50% av arbeids-tiden din</ListText>
      </ListItem>
      <ListItem>
        <ListIcon>
          <CheckmarkCircleFillIcon color='green'/>
        </ListIcon>
        <ListText>Under 67 år</ListText>
      </ListItem>
    </List>
  </FinalBox>
);

export default PleiePenger;
