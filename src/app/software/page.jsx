import Punkt from "../components/Punkt.jsx";
import Textfeld from "../components/Textfeld.jsx";

const Software = () =>
    {
        return(
            <div>
            <div className="zentrieren">    
            <h2>Zusätzliche Software für den Trommelgravierer<br/> von der Bolasys GmbH</h2>
            </div>

            <div className="software-card" >
            <Textfeld titel="Software für:">
                <Punkt text="&nbsp;Auftragsvorbereitung & Annahme"/>
                <Punkt text="&nbsp;Auftragsverwaltung"/>
                <Punkt text="&nbsp;Designer"/>
                <Punkt text="&nbsp;Nesting"/>
                <Punkt text="&nbsp;Komissionierungsmanagement"/>    
                <Punkt text="&nbsp;Interface für Graviermaschinen"/>
                <Punkt text="&nbsp;Montagestation"/>
                <Punkt text="&nbsp;Komissionierungs-& Versandmodul"/>   
                <Punkt text="&nbsp;Externe Software"/>
                <Punkt text="&nbsp;GPE-Basis"/>   
            </Textfeld>

            </div>
       


</div>
        )
    }

    export default Software;