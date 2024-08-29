import Punkt from "../components/Punkt.jsx";
import Textfeld from "../components/Textfeld.jsx";
import Image from "next/image";
import img3 from "../image/Auftragsverwaltung.png";
import img4 from "../image/Lagermanagement.png";
import img5 from "../image/Verpackung.png";

const Software = () =>
    {
        return(
            <div>
            <div className="zentrieren">    
            <h2>Zusätzliche Software für den Trommelgravierer von der Bolasys GmbH</h2>
            </div>

            <div style={{marginLeft:"15%"}}>
            <Textfeld titel="Auftragsverwaltung">
            <div className="profile-img"> 
                <Image src={img3} width={70} height={70} alt=""/>
                </div>
                <Punkt text="&nbsp;Neue Aufträge nach Vorlage" />
                <Punkt text="&nbsp;Automatisches Erstellen von Aufträgen"/>
                <Punkt text="&nbsp;Auftragsstatus-Monitor"/>
                <Punkt text="&nbsp;Workflow- und Prozessauswahl"/>
                <Punkt text="&nbsp;Datenaustausch mit externer Software"/>    
            </Textfeld>

            <Textfeld titel="Lagermanagement">
            <div className="profile-img"> 
                <Image src={img4} width={70} height={70} alt=""/>
                </div>
                <Punkt text="&nbsp;App zur Kommissionierung"/>
                <Punkt text="&nbsp;Erstellung von Komponentenlisten nach Gummiplatten und Lagerfach"/>
                <Punkt text="&nbsp;Datenaustausch mit externer Warenwirschaft"/>
            </Textfeld>
   
            <Textfeld titel="Montageprogramm">
            <div className="profile-img"> 
                <Image src={img5} width={70} height={70} alt=""/>
                </div>
                <Punkt text="&nbsp;Zuordnung von Textplatten und Gehäusen"/>
                <Punkt text="&nbsp;Ausdruck der Versandpapiere"/>
                <Punkt text="&nbsp;Berechung Verpackungsvolumen"/>
                <Punkt text="&nbsp;Datenübergabe an Versanddienstleister"/>
            </Textfeld>
            </div>
       


</div>
        )
    }

    export default Software;