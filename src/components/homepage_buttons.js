import React from "react";
import { Button } from "@navikt/ds-react";
import { Link } from 'react-router-dom';

class HomeButtons extends React.Component {
    render() {
       return ( 
        <div className="flex flex-wrap gap-2 buttons">
            <Link to='/info'>
            <div className="flex flex-wrap gap-2 buttons">

                <Button variant="primary">Start veilederen</Button>
                </div>

            </Link>
            <div className="flex flex-wrap gap-2 buttons2">

            <Button variant="primary">Få hjelp med veilederen</Button>
            </div>
        </div>
        );  
    }
   
}
 
export default HomeButtons;