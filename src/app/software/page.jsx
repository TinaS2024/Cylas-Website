import Punkt from "../components/Punkt.jsx";
import Textfeld from "../components/Textfeld.jsx";

const Software = () =>
    {
        return(
            <div>
            <div className="zentrieren">    
            <h1>Zusätzliche Software für den Trommelgravierer<br/> von der Bolasys GmbH</h1>
            </div>

            <div className="software-card" >
            <Textfeld titel="">
                <Punkt text="&emsp;Auftragsvorbereitung & Annahme"/>
                <Punkt text="&emsp;Auftragsverwaltung"/>
                <Punkt text="&emsp;Designer"/>
                <Punkt text="&emsp;Nesting"/>
                <Punkt text="&emsp;Komissionierungsmanagement"/>    
                <Punkt text="&emsp;Interface für Graviermaschinen"/>
                <Punkt text="&emsp;Montagestation"/>
                <Punkt text="&emsp;Komissionierungs-& Versandmodul"/>   
                <Punkt text="&emsp;Externe Software"/>
                <Punkt text="&emsp;GPE-Basis"/>   
            </Textfeld>

            </div>
       


</div>
        )
    }

    export default Software;