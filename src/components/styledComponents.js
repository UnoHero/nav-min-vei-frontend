import styled from 'styled-components';

export const Body = styled.div`
  background-color: rgb(211, 230, 237);
`;

export const MainContent = styled.div`
  background-color: rgb(211, 230, 237); // Light blue background
  padding: 20px;
  display: flex;
  justify-content: center;
`;

// The circles on the left side that tracks were you are on the questions. The "border", background-color and color changes the color of the pinters dependig on were you are on the site.
export const Circle = styled.div`
  position: relative;
  border: 2px solid ${props => props.color ? "#0067C5" : "white"};
  background-color: ${props => props.color ? "#0067C5" : "white"};
  border-radius: 50%;
  color: ${props => props.color ? "white" : "black"};
  z-index: 1;
  margin: 0px 3px 0px 3px;
  text-align: center;
  display: block;
  height: 30px;
  width: 30px;
  transition: all 0.3s ease; // Legg til overgang for jevn animasjon
  cursor: pointer;
  &:hover {
    transform: scale(1.1); // Forstørr effekten ved hover for å indikere klikkbarhet
  }
`;

// "TextBox" is the container of the different questins/parts. The "cursor" properti is code that changes the cursor if you can click the question/part
export const TextBox = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 1rem 6rem 0.4rem 6rem;
  cursor: ${props => props.cursor};
  transition: all 0.3s ease; // Legg til overgang for jevn animasjon
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Legg til skyggeeffekt ved hover for å indikere klikkbarhet
  }
`;

// The line on the left side of the screen between the numbers
export const Line = styled.div`
  width: 0.4rem;
  height: 100%;
  background-color: #CCE1FF;
  position: relative;
  left: 15px;
  z-index: 0;
`;
  
export const List = styled.ul`
  list-style: none;
`;

// "TextBox": Legg til skyggeeffekt ved hover for å indikere klikkbarhet
export const Item = styled.li`
  display: grid;
  grid-template-columns: 5rem 50rem;
  margin: 20px 0px 20px 0px;
  &:hover {
    ${TextBox} {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }
  }
`;

export const StepTitle = styled.div`
  font-size: 1.75rem;
`;

export const StepHeader = styled.div`
  font-size: 1rem;
`;

export const StepText = styled.div`
 font-size: 1rem;
 margin: 2rem 0rem;
`;

export const NextStepButton = styled.button`
  border-radius: 4px;
  border: 0px;
  padding: 12px 20px;
  background-color: #0067C5;
  color: white;
  cursor: pointer;
`;

export const RadioBox = styled.div`
  padding: 3rem 2rem;
  margin: 2rem 0rem;
  background-color: #CCE1FF;
  border-radius: 0.5rem;

`;

export const Txt = styled.div`
fontSize: 20%;
`;

export const DataBilder = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  width: 400px;
`;

// Pictures of the different agencies
export const Image = styled.img`
  max-width: auto;
  max-height: 40px;
  margin: 10px; /* Adjust the spacing between images */
`;

// The Imput filed were you write your socialSecurity number
export const InputBox = styled.input`
    display: block;
    width: 290px;
    height: 48px;
    margin: 10px 0px;
    border-radius: 4px;
    border: 1px solid black;
`

// The header above the imput filed
export const InputLabel = styled.label`
    font-size: 1rem;
`

export const Round = styled.div`
  position: relative;
  border: 2px solid #0067C5;
  background-color: white;
  border-radius: 50%;
  color: #0067C5;
  z-index: 1;
  margin: 0px 3px 0px 3px;
  text-align: center;
  display: block;
  height: 30px;
  width: 30px;
  transition: all 0.3s ease; // Legg til overgang for jevn animasjon
  cursor: pointer;
  &:hover {
    transform: scale(1.1); // Forstørr effekten ved hover for å indikere klikkbarhet
  }
`;

export const Bold = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const BlueBox = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px #0067c5;
  padding: 20px;
`;

export const Icon = styled.div`
  margin-right: 10%;
`;

// The green buttons on the "Spørsmål til min livssituasjon" part. The buttons change color wen hover.
export const GreenButton = styled.button`
  padding: 10px 20px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: white;
  border: none;
  background-color: #4CAF50;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  margin: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none; // If you want the buttons as links, this removes underline
 
  &:hover {
    background-color: #45a049;
  }
 
  svg {
    fill: white;
  }
`;

export const CheckMark = styled.div`
  display: inline;
  position: absolute;
  top: 35%;
  right: 10%;
`