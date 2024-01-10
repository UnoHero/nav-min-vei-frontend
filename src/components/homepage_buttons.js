import React from "react";
import { Button } from "@navikt/ds-react";
import { Link } from 'react-router-dom';

class HomeButtons extends React.Component {
    render() {
       return ( 
        <div className="flex flex-wrap gap-2">
            <Link to='/info'>
                <Button variant="primary">Start veilederen</Button>
            </Link>
            <Button variant="secondary">Få hjelp med veilederen</Button>
        </div>
        );  
    }
   
}
 
export default HomeButtons;