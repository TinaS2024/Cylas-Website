

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
    var toolklick1 = "... führt zu bester Gravurqualität durch Vermeidung bidirektionaler Gravur und langer Lebensdauer der Achsenmechanik durch Vermeidung abrupter Bewegungsvorgänge.";
    var toolklick2 = "... führt zu Stabilität des Strahlengangs und selten erforderlicher Justage.";
    var toolklick3 = "... führt zu geringer Staub- und Geruchsentwicklung, sauberer Maschine und längeren Reinigungsintervallen.";

    var toolklick4 = "... führt zur Entkopplung des Be- und Entladevorgang vom Bearbeitungsvorgang. \n Das Beladen und Entladen kann jederzeit im laufenden Betrieb vorgenommen werden. \n Ein volles Magazin kann in etwa 5 Stunden abgearbeitet werden.";
    var toolklick5 = "... ermöglicht die automatische Zuordnung von Dateien und Parametersätzen zu den auf den Trommeln montierten Materialen";
    var toolklick6 = "Der Betrieb kann automatisch oder manuell erfolgen. \n Im automatischen Betrieb wird ein Startvorgang eingeleitet, wenn sich zu graierende Dateien im Puffer befinden und Material im Magazin vorhanden ist.";
    var toolklick7 = "Der Ethernetanschluss gestattet die Verbindung mit dem Worklfow- oder der ERP-Software in Ihrem Firmennetzwerk.";
    var toolklick8 = "Die Kameraüberwachung gestattet die Beobachtung des Bearbeitsvorgangs und automatische Auslösung von Alarmen bei ungewöhnlichen Betriebszuständen.";

    var toolklick9 = "... durch vollständig verrohrten Strahlengang.";
    var toolklick10 = "Absaugdüse";
    var toolklick11 = "Überwachung des Maschinenstaus über das Netzwerk. \n Überwachung des Bearbeitungsvorgangs mit Kamera.";
    var toolklick12 = "Tel: 01718500908";

    var toolklick13 = "... bis ca. 250W standart mit 2 Stück eingebauten TI100 Strahlqellen. Andere Laser mit geringerer Leistung möglich.";
    var toolklick14 = '... bei Standartlaserbestückung ca. eine A4-Seite/22 min. \n Schneiddauer bei "normalen" Stempeln kleiner als 5 Minuten.';
    var toolklick15 = "Standartplatten A, unterschiedlicher Hersteller.";
    var toolklick16 = "Kompressorkühler z.b. Hyfra oder CW6000: \n Absauggerät z.b. Teka \n Vorabschneider z.b. Cylas CVA-1 oder CVA-2";


    toolklick1.split("\n");
    toolklick2.split("\n");
    toolklick3.split("\n");
    toolklick4.split("\n");
    toolklick5.split("\n");
    toolklick6.split("\n");
    toolklick7.split("\n");
    toolklick8.split("\n");
    toolklick9.split("\n");
    toolklick10.split("\n");
    toolklick11.split("\n");
    toolklick12.split("\n");
    toolklick13.split("\n");
    toolklick14.split("\n");
    toolklick15.split("\n");
    toolklick16.split("\n");

    //Alle 4 Karten nebeneinander machen oder Gerät in Mitte
    return(
        <div>
            <div className="maschinenlogo"><Image src={drumfire_logo} alt={drumfire_logo} width={250} height={48}/> </div>
        <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 20px"}}>
            
            <h1>Trommelgravierer für höchsten Durchsatz bei der Produktion <br/>von Stempelgummiplatten</h1>
            <br /> 
             <br />
           <div style={{textAlign:"center"}}>
             <Image src={drumfire} alt={drumfire} width={800} height={400} style={{maxWidth:"100%", height:"auto"}}/>   
            </div>
           
               <div style={{marginLeft:"15%"}}>

               <div className="textFieldsContainer"> 

            {/* Erstes Textfeld */}
            
            <Textfeld titel="Effizienter Gravurprozess">
            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Kontinuierlicher spiralförmiger Gravurpfad" 
                tooltiptext={toolklick1}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Bewegung des Materials in zwei Richtungen, Stillstand des Arbeitskopfs" 
                tooltiptext={toolklick2}></Tooltip>

            <MyVideo2 path={gravierer} width={257} height={275}></MyVideo2>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Staubabsaugung mit optimierter Düse in nächser Nähe zum Entstehungsort" 
                tooltiptext={toolklick3}></Tooltip>
            </Textfeld>


            {/* Zweites Textfeld */}

            <Textfeld  titel="Hohe Produktivität durch optimale Einbindung in ihre Produktionsprozesse">

            <div style={{marginLeft:"120px",marginTop:"-20px"}}>
                  <Image src={trommel} alt={drumfire} width={150} height={120}/>    
            </div>
                <Punkt text="&nbsp;"></Punkt><Tooltip tooltiptitel="&emsp;Revolvermagain für 10 Trommeln mit jeweils einer A4-Gummiplatte" 
                tooltiptext={toolklick4}></Tooltip>
                 <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;RFID-Kennzeichnungen der Trommeln" 
                tooltiptext={toolklick5}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Intuitive Bedienbarkeit" 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Netzwerkeinbindung" 
                tooltiptext={toolklick7}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Kameraüberwachung" 
                tooltiptext={toolklick8}></Tooltip>
            
            </Textfeld> 

              {/* Drittes Textfeld */}
            
            <Textfeld titel="Geringer Wartungs-und Serviceaufwand">
               

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Wirksamer Schutz der optischen Komponenten" 
                tooltiptext={toolklick9}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Hocheffiziente Absaugung unmittelbar am Entstehungsort des Gummistaubs." 
                tooltiptext={toolklick10}></Tooltip>
                <div style={{marginLeft:"120px"}}>
                    <Image src="" alt="" width={50} height={50} style={{maxWidth:"100%", height:"auto"}}/>  
                </div>
                 

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Umfassende Diagnose- und Fernwartungsfunktionen." 
                tooltiptext={toolklick11}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Kurzer Draht zum Hersteller." 
                tooltiptext={toolklick12}></Tooltip>

            </Textfeld>

                {/* Viertes Textfeld */}

            <Textfeld  titel="Systemdaten">
        
            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Laserleistung" 
                tooltiptext={toolklick13}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Gravurleistung, Schneidleistung for normale Stempelgummiplatten" 
                tooltiptext={toolklick14}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Verwendete Gummiplatten" 
                tooltiptext={toolklick15}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="&emsp;Zubehör" 
                tooltiptext={toolklick16}></Tooltip>
               
            </Textfeld>

           
            </div>
            </div>

            
    
        </div>

       
</div>
    )
}

export default Drumfire;