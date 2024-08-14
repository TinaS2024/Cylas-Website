import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Subnavbar from "../../components/Subnavbar.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";

import gravierer from "../../videos/video3.mp4";
import MyVideo from "../../components/MyVideo.jsx";


const Drumfire = () =>
{

    var text1 = ["Kontinuierlicher spiralförmiger Gravurpfad führt zu bester Gravurqualität und langer Gerätelebensdauer.", <br/>,<br/>, "Geringe Staub- & Geruchsentwicklung durch effiziente Absaugung nahe am Gravurort."];
    var text2 = ["Automatische Be- und Entladung im laufenden Betrieb durch Revolvermagazin für 10 A4-Gummiplatten.",<br/>,<br/> ,"Hochleistungsvariante mit kurzen Gravur- & Schneidzeiten (weniger als 30 Minuten pro A4 Seite.", <br/>,<br/>,"Trommelkenzeichnung mit RFID-Tags zur automatischen Materialerkennung.)"];
    var text3 = ["Umfasende Diagnose- & Fernwartungsfunktionen." ,<br/>,<br/>, "Abgeschlossener, verrohrter Strahlengang."];
    var text4 = ["Kurzer Vetriebsweg.",<br/>,<br/>, "Günstige, bedarfsspezifische Anpassungen möglich.",<br/>,<br/>, "Gutes Preis-Leistungsverhältnis."];
    var text5 = ["Betriebsmodus automaisch oder manuell.",<br/>,<br/>, "Webinterface optimiert für PC & mobile Geräte."];
    var text6 = ["Zugriff über lokales Netzwerk.",<br/>,<br/>,"Multi-User-fähiges Interface.",<br/>,<br/>,"Statusinformation über verschiedene Kommunikationskanäle - optionale Kamera."];
    
    const top = "-50px"
    const left ="-20px"
    
    return(
        <>
        <Subnavbar></Subnavbar>
        <div className="abstand">
          
            <h1>Cylas Trommelgravierer DRUMFIRE II <br /> Engrave your Stamp</h1>
            <br />
            <h3>Hocheffiziente Lasergravur von Stempeltextplatten<br />
            Hohe Laserleistung-Revolvermagazin-Autoload
             </h3>
             <br />
               <div style={{marginLeft:"15%"}}>

               
             <Textfeld titel="Graviermaschine">
                <Punkt text="&nbsp;"></Punkt><Tooltip tooltiptitel="Trommelverfahren" 
                tooltiptext={text1}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Hohe Produktivität" 
                tooltiptext={text2}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Geringer Wartungs-& Serviceaufwand" 
                tooltiptext={text3}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kundennähe" 
                tooltiptext={text4}></Tooltip>

            </Textfeld>

            <div className="leeres-textfeld" style={{marginTop:"10px",marginLeft:"-50px"}}>
                <MyVideo path={gravierer} width={300} height={300}></MyVideo>
            </div>
            
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