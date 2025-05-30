
"use client"
/* eslint-disable react/jsx-key */
import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";

import gravierer from "../../videos/video3.mp4";
import MyVideo2 from "../../components/MyVideo2.jsx";
import Image from "next/image";
import drumfire from "../../image/drumfire.png";
import trommel from "../../image/Trommel.png";
import drumfire_logo from "../../image/drumfire_logo.png";


const Drumfire = () =>
{
    var text0 =["Nach langjähriger Tätigkeit im Bereich der Lasergravur von Stempeltextplatten",<br/>, "und der Herstellung weltweit genutzter Trommelgravierer war die Entwicklung", <br/>,"des CyD120 Autoload für uns der natürliche Schritt,",<br/>, "den Markt durch Innovation zu beleben.",<br/>, "Das Gerät dient hauptsächlich zur Gravur und zum Ausschneiden von Stempeltextplatten."];
    var text1 = ["• Kontinuierlicher spiralförmiger Gravurpfad führt zu bester Gravurqualität und langer Gerätelebensdauer.",<br/>, "• Geringe Staub- & Geruchsentwicklung durch effiziente Absaugung nahe am Gravurort."];
    var text2 = ["• Automatische Be- und Entladung im laufenden Betrieb durch Revolvermagazin für 10 A4-Gummiplatten.",<br/>, " • Hochleistungsvariante mit kurzen Gravur- & Schneidzeiten (weniger als 30 Minuten pro A4 Seite. ",<br/>, " • Trommelkenzeichnung mit RFID-Tags zur automatischen Materialerkennung.)"];
    var text3 = [""];
    var text4 = ["• Kurzer Vetriebsweg." ,<br/>, "• Günstige, bedarfsspezifische Anpassungen möglich." ,<br/>, "• Gutes Preis-Leistungsverhältnis."];
    var text5 = ["• Betriebsmodus automaisch oder manuell.",<br/>, " • Webinterface optimiert für PC & mobile Geräte."];
    var text6 = ["• Zugriff über lokales Netzwerk.",<br/>, "• Multi-User-fähiges Interface.",<br/>, "• Statusinformation über verschiedene Kommunikationskanäle - optionale Kamera."];

    var toolklick1 = "• Kontinuierlicher spiralförmiger Gravurpfad führt zu bester Gravurqualität und langer Gerätelebensdauer. \n • Geringe Staub- & Geruchsentwicklung durch effiziente Absaugung nahe am Gravurort.";
    var toolklick2 = "• Automatische Be- und Entladung im laufenden Betrieb durch Revolvermagazin für 10 A4-Gummiplatten. \n • Hochleistungsvariante mit kurzen Gravur- & Schneidzeiten (weniger als 30 Minuten pro A4 Seite. \n • Trommelkenzeichnung mit RFID-Tags zur automatischen Materialerkennung.)";
    var toolklick3 = "";
    var toolklick4 = "• Kurzer Vetriebsweg.\n • Günstige, bedarfsspezifische Anpassungen möglich. \n • Gutes Preis-Leistungsverhältnis.";
    var toolklick5 = "• Betriebsmodus automaisch oder manuell. \n • Webinterface optimiert für PC & mobile Geräte.";
    var toolklick6 = "• Zugriff über lokales Netzwerk. \n • Multi-User-fähiges Interface. \n • Statusinformation über verschiedene Kommunikationskanäle - optionale Kamera.";
    
    toolklick1.split("\n")
    toolklick2.split("\n")
    toolklick3.split("\n")
    toolklick4.split("\n")
    toolklick5.split("\n")
    toolklick6.split("\n")

    //Alle 4 Karten nebeneinander machen oder Gerät in Mitte
    return(
        <div>
            <div className="maschinenlogo"><Image src={drumfire_logo} alt={drumfire_logo} width={250} height={48}/> </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 20px"}}>
            
            <h1>Trommelgravierer für höchsten Durchsatz bei der Produktion <br/>von Stempelgummiplatten</h1>
            <br /> 
            {/*<p style={{fontSize:"20px",padding:"1%",color:"black"}}>{text0}</p>*/}
             <br />
           <div style={{textAlign:"center"}}>
             <Image src={drumfire} alt={drumfire} width={800} height={400} style={{maxWidth:"100%", height:"auto"}}/>   
            </div>
           
               <div style={{marginLeft:"15%"}}>

               <div className="textFieldsContainer"> 
            
            <Textfeld titel="Gravurprozess">
            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Gravurpfade" 
                tooltiptext={toolklick1}></Tooltip>
                <MyVideo2 path={gravierer} width={257} height={275}></MyVideo2>
            </Textfeld>

            <Textfeld  titel="Hohe Produktivität durch optimale Einbindung">
                <Punkt text="&nbsp;"></Punkt><Tooltip tooltiptitel="&emsp;Trommelmagazin" 
                tooltiptext={toolklick2}></Tooltip>
                 <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Intuitive Bedienbarkeit" 
                tooltiptext={toolklick5}></Tooltip>
                <div style={{marginLeft:"50px"}}>
                  <Image src={trommel} alt={drumfire} width={250} height={200}/>    
                </div>
            </Textfeld> 
            
            <Textfeld titel="Geringer Wartungs-und Serviceaufwand">
               

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Maschinenüberwachung" 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Wirksamer Schutz der optischen Komponenten durch vollständig verrohrten Strahlengang." 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Hocheffiziente Absaugung unmittelbar am Entstehungsort des Gummistaubs." 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Umfasende Diagnose- & Fernwartungsfunktionen." 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Zugriff über lokales Netzwerk." 
                tooltiptext={toolklick6}></Tooltip>


                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Kundennähe" 
                tooltiptext={toolklick4}></Tooltip>

            </Textfeld>

            <Textfeld  titel="Betriebsdaten">
        
            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Laserleistung" 
                tooltiptext={toolklick3}></Tooltip>
               
            </Textfeld>

           
            </div>
            </div>

            
    
        </div>

       
</div>
    )
}

export default Drumfire;