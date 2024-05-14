import Textfeld from "../components/Textfeld.jsx";

const GPE = () =>
    {
        return(
            <div className="abstand">
            <div className="zentrieren">    
            <h1>Graphical Products Environment</h1>
            </div>
                <Textfeld titel="Graviermaschine" 
                punkt1="&nbsp;Trommel-verfahren" 
                punkt2="&nbsp;Hohe Prouktivität" 
                punkt3="&nbsp;Geringer Wartung- und Serviceaufwand" 
                punkt4="&nbsp;Kundennähe"/>

                <Textfeld titel="Bediensoftware"
                punkt1="&nbsp;Intuitive Bedienbarkeit"
                punkt2="&nbsp;Maschinenüberwachung"/>

                <Textfeld titel="Auftragsverwaltung"/>
                <Textfeld titel="Lagermanagement"/>
                <Textfeld titel="Montageprogramm"/>
                
</div>
        )
    }

    export default GPE;