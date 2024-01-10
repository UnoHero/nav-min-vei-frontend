import React from "react";
import { ReadMore } from "@navikt/ds-react";

class Dropdown extends React.Component {
    render() {
        return ( 
            <center>
                <div className='dropdown'>

                  <ReadMore header="Hva er MinVeileder">
                    Med helsemessige begrensninger mener vi funksjonshemming, sykdom,
                    allergier som hindrer deg i arbeidet eller andre årsaker som må tas hensyn
                    til når du skal finne nytt arbeid. Du må oppgi hva som gjelder for deg, og
                    dokumentere de helsemessige årsakene du viser til.
                  </ReadMore>
                  <ReadMore header="Hva kan MinVeileder hjelpe deg med?">
                    Med helsemessige begrensninger mener vi funksjonshemming, sykdom,
                    allergier som hindrer deg i arbeidet eller andre årsaker som må tas hensyn
                    til når du skal finne nytt arbeid. Du må oppgi hva som gjelder for deg, og
                    dokumentere de helsemessige årsakene du viser til.
                  </ReadMore>
                 </div>
            </center>
         );
    }
    
}
 
export default Dropdown;