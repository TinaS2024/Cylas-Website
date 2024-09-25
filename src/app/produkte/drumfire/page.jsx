/* eslint-disable react/jsx-key */
import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Subnavbar from "../../components/Subnavbar.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";
import MyModal from "@/app/components/MyModal.jsx";

import gravierer from "../../videos/video3.mp4";
import MyVideo2 from "../../components/MyVideo2.jsx";


const Drumfire = () =>
{

    var text0 =["Nach langjähriger Tätigkeit im Bereich der Lasergravur von Stempeltextplatten",<br/>, "und der Herstellung weltweit genutzter Trommelgravierer war die Entwicklung", <br/>,"des CyD120 Autoload für uns der natürliche Schritt,",<br/>, "den Markt durch Innovation zu beleben.",<br/>, "Das Gerät dient hauptsächlich zur Gravur und zum Ausschneiden von Stempeltextplatten."];
    var text1 = ["Kontinuierlicher spiralförmiger Gravurpfad führt zu bester Gravurqualität und langer Gerätelebensdauer.", <br/>,<br/>, "Geringe Staub- & Geruchsentwicklung durch effiziente Absaugung nahe am Gravurort."];
    var text2 = ["Automatische Be- und Entladung im laufenden Betrieb durch Revolvermagazin für 10 A4-Gummiplatten.",<br/>,<br/> ,"Hochleistungsvariante mit kurzen Gravur- & Schneidzeiten (weniger als 30 Minuten pro A4 Seite.", <br/>,<br/>,"Trommelkenzeichnung mit RFID-Tags zur automatischen Materialerkennung.)"];
    var text3 = ["Umfasende Diagnose- & Fernwartungsfunktionen." ,<br/>,<br/>, "Abgeschlossener, verrohrter Strahlengang."];
    var text4 = ["Kurzer Vetriebsweg.",<br/>,<br/>, "Günstige, bedarfsspezifische Anpassungen möglich.",<br/>,<br/>, "Gutes Preis-Leistungsverhältnis."];
    var text5 = ["Betriebsmodus automaisch oder manuell.",<br/>,<br/>, "Webinterface optimiert für PC & mobile Geräte."];
    var text6 = ["Zugriff über lokales Netzwerk.",<br/>,<br/>,"Multi-User-fähiges Interface.",<br/>,<br/>,"Statusinformation über verschiedene Kommunikationskanäle - optionale Kamera."];
    
    
    return(
        <>
        <Subnavbar></Subnavbar>
        <div style={{marginTop:"-5%"}}>
          
            <h2>Cylas Trommelgravierer DRUMFIRE II <br /> Engrave your Stamp</h2>
            <br />
            <p style={{fontSize:"20px",padding:"1%"}}>{text0}</p>
             <br />
               <div style={{marginLeft:"15%"}}>

               
             <Textfeld  titel="Graviermaschine">
                <Punkt text="&nbsp;"></Punkt><Tooltip tooltiptitel="Trommelverfahren" 
                tooltiptext={text1}></Tooltip><MyModal titel="Trommelverfahren" inhalt={text1}/>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Hohe Produktivität" 
                tooltiptext={text2}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Geringer Wartungs-& Serviceaufwand" 
                tooltiptext={text3}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kundennähe" 
                tooltiptext={text4}></Tooltip>

            </Textfeld>
            <Textfeld>
                <MyVideo2 path={gravierer} width={257} height={275}></MyVideo2>
            </Textfeld>

            <Textfeld titel="Bediensoftware">
                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Intuitive Bedienbarkeit" 
                tooltiptext={text5}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Maschinenüberwachung" 
                tooltiptext={text6}></Tooltip>

            </Textfeld>
            </div>

            
    
        </div>

       
</>
    )
}

export default Drumfire;