

/* eslint-disable react/jsx-key */
import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";

import gravierer from "../../videos/video3.mp4";
import MyVideo2 from "../../components/MyVideo2.jsx";
import Image from "next/image";
import drumfire from "../../image/drumfire.png";
import trommel from "../../image/Trommel.png";
import absaugdüse from "../../image/Absaugdüse.png";
import vorabscheider from"../../image/Vorabscheider.png";
import drumfire_logo from "../../image/drumfire_logo.png";


const Drumfire = () =>
{
    const toolklick1 = "➥Führt zu bester Gravurqualität durch Vermeidung bidirektionaler Gravur und langer Lebensdauer der Achsenmechanik durch Vermeidung abrupter Bewegungsvorgänge.";
    const toolklick2 = "➥Führt zu Stabilität des Strahlengangs und selten erforderlicher Justage.";
    const toolklick3 = "➥Führt zu geringer Staub- und Geruchsentwicklung, sauberer Maschine und längeren Reinigungsintervallen.";

    const toolklick4 = "➥Führt zur Entkopplung des Be- und Entladevorgang vom Bearbeitungsvorgang. \n ➥Das Beladen und Entladen kann jederzeit im laufenden Betrieb vorgenommen werden. \n ➥Ein volles Magazin kann in etwa 5 Stunden abgearbeitet werden.";
    const toolklick5 = "➥Ermöglicht die automatische Zuordnung von Dateien und Parametersätzen zu den auf den Trommeln montierten Materialen";
    const toolklick6 = "➥Die Fokuseinstellung erfolgt automatisch durch Auswahl des Materialparametersatzes."
    const toolklick7 = "➥Der Betrieb kann automatisch oder manuell erfolgen.\n ➥Im automatischen Betrieb wird ein Startvorgang eingeleitet, wenn sich zu gravierende Dateien im Puffer befinden und Material im Magazin vorhanden ist.";
    const toolklick8 = "➥";
    const toolklick9 = "➥Der Ethernetanschluss gestattet die Verbindung mit Workflow- oder ERP-Software in Ihrem Firmennetzwerk.\n ➥Ein geeignetes Workflow-System wird von der Fa.Bolasys angeboten (GPE).\n ➥Gravuren können über das Netzwerk ausgelöst werden und der Status einzelner Gravur-Jobs und damit auch einzelner Aufträge abgefragt werden.\n ➥Die Bedienung kann über beliebige Rechner im Netzwerk oder auch über Mobile Geräte erfolgen.\n ➥Die Netzwerkanbindung gestattet die Abfrage des Maschinenstatus und die Durchführung von Wartungsmaßnahmen.";
    const toolklick10 = "➥Die Kameraüberwachung gestattet die Beobachtung des Bearbeitsvorgangs und automatische Auslösung von Alarmen bei ungewöhnlichen Betriebszuständen.";

    const toolklick11 = "➥Durch vollständig verrohrten Strahlengang.";
    const toolklick12 = "➥Absaugdüse";
    const toolklick13 = "➥Überwachung des Maschinenstaus über das Netzwerk.\n ➥Überwachung des Bearbeitungsvorgangs mit Kamera.";
    const toolklick14 = "➥Tel: 01718500908";

    const toolklick15 = "➥Standard mit 2 Stück eingebauten TI100 Strahlqellen. Andere Laser mit geringerer Leistung möglich.";
    const toolklick16 = '➥Bei Standardlaserbestückung ca. eine A4-Seite/22 min.\n ➥Schneiddauer bei "normalen" Stempeln kleiner als 5 Minuten.';
    const toolklick17 = "➥Standardplatten A, unterschiedlicher Hersteller.";
    const toolklick18 = "➥Kompressorkühler z.b. Hyfra oder CW6000,\n ➥Absauggerät z.b. Teka,\n ➥Vorabschneider z.b. Cylas VA-1 oder VA-2";

    
    


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

               <div className="textFieldsContainer1 drumfire_leiste"> 

            {/* Erstes Textfeld */}
            
            <Textfeld titel="Effizienter Gravurprozess">
                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kontinuierlicher spiralförmiger Gravurpfad" 
                tooltiptext={toolklick1}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Bewegung des Materials in zwei Richtungen, Stillstand des Arbeitskopfs" 
                tooltiptext={toolklick2}></Tooltip>

            <MyVideo2 path={gravierer} width={257} height={275}></MyVideo2>
            <br/>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Staubabsaugung mit optimierter Düse in nächster Nähe zum Entstehungsort" 
                tooltiptext={toolklick3}></Tooltip>
            </Textfeld>


            {/* Zweites Textfeld */}

            <Textfeld  titel="Hohe Produktivität durch optimale Einbindung in ihre Produktionsprozesse">

            <div className="trommel_bild">
                  <Image src={trommel} alt={drumfire} width={150} height={120}/>   
            </div>

            <br/> 
                <Punkt text="&nbsp;"></Punkt><Tooltip tooltiptitel="Revolvermagazin für 10 Trommeln mit jeweils einer A4-Gummiplatte" 
                tooltiptext={toolklick4}></Tooltip>

                 <Punkt text="&nbsp;"/><Tooltip tooltiptitel="RFID-Kennzeichnungen der Trommeln" 
                tooltiptext={toolklick5}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Motorische Z-Achse" 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Einfache Bedienung" 
                tooltiptext={toolklick7}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Motorische Fokuseinstellung" 
                tooltiptext={toolklick8}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Netzwerkeinbindung" 
                tooltiptext={toolklick9}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kameraüberwachung" 
                tooltiptext={toolklick10}></Tooltip>
            
            </Textfeld> 

              {/* Drittes Textfeld */}
            
            <Textfeld titel="Geringer Wartungs-und Serviceaufwand">
               

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Wirksamer Schutz der optischen Komponenten" 
                tooltiptext={toolklick11}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Hocheffiziente Absaugung unmittelbar am Entstehungsort des Gummistaubs." 
                tooltiptext={toolklick12}></Tooltip>
                <div className="absaug_bild">
                    <Image src={absaugdüse} alt="absaugdüse" width={100} height={100} style={{maxWidth:"100%", height:"auto",marginLeft:"-20px"}}/><p style={{margin:"-80px -50px 50px 10px",color:"#36abb3"}}>Absaugdüse</p>
                </div>
                 
                <br/> 
                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Umfassende Diagnose- und Fernwartungsfunktionen." 
                tooltiptext={toolklick13}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kurzer Draht zum Hersteller." 
                tooltiptext={toolklick14}></Tooltip>

            </Textfeld>

                {/* Viertes Textfeld */}

            <Textfeld  titel="Systemdaten">
        
            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Laserleistung bis ca. 250 Watt" 
                tooltiptext={toolklick15}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Gravurleistung, Schneidleistung for normale Stempelgummiplatten" 
                tooltiptext={toolklick16}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Verwendete Gummiplatten" 
                tooltiptext={toolklick17}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Zubehör" 
                tooltiptext={toolklick18}></Tooltip>

            <div className="scheider_bild">
                  <Image src={vorabscheider} alt="vorabscheider" width={80} height={240}/><p style={{margin:"-130px -50px 50px 10px",color:"#36abb3"}}>Vorabscheider<br/> VA-1</p>
            </div>
               
            </Textfeld>

           
            </div>
            </div>

            
    
        </div>

       
</div>
    )
}

export default Drumfire;