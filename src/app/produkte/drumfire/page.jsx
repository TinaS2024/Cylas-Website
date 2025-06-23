

/* eslint-disable react/jsx-key */
import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";

import MyVideo2 from "../../components/MyVideo2.jsx";
import Image from "next/image";
import drumfire from "../../image/drumfire.png";
import trommel from "../../image/Trommel.png";
import absaugdüse from "../../image/Absaugdüse.png";
import vorabscheider from"../../image/Vorabscheider.png";
import drumfire_logo from "../../image/drumfire_logo.png";
import Link from "next/link";


const Drumfire = () =>
{
    const toolklick1 = "➥ Hohe Gravurqualität durch gleichförmige Bewegung \n ➥ Keine Vorlauf-Rücklauf-Korrektur notwendig \n ➥ Längere Lebensdauer der Achsmechanik wegen geringerer mechanischer Belastung";
    const toolklick2 = "➥ Hohe Gravurqualität durch konstante Strahleigenschaften im Laserfokus \n ➥ Einfachere Strahljustage";
    const toolklick3 = "➥ Geringere Staubentwicklung in der Machine und im Arbeitsraum \n ➥ Geringere Geruchsentwicklung. \n ➥ Längere Reinigungsintervalle";

    const toolklick4 = "➥ Entkopplung des Be- und Entladevorgangs vom Bearbeitungsvorgang. \n ➥ Das Nachladen und die Entnahme von feriggestellten Trommeln aus dem Magazin kann bei laufender Gravur erfolgen. \n ➥ Ein volles Magazin kann in etwa 5 Stunden abgearbeitet werden.";
    const toolklick5 = "➥ Ermöglicht die automatische Zuordnung von Dateien und Parametersätzen zu den auf den Trommeln montierten Materialen";
    const toolklick6 = "➥ Der Betrieb kann automatisch oder manuell erfolgen.\n ➥ Im automatischen Betrieb wird ein Startvorgang eingeleitet, wenn sich zu gravierende Dateien im Puffer befinden und Material im Magazin vorhanden ist.";
    const toolklick7 = "➥ Automatische Fokuseinstellung durch Auswahl des Materialparametersatzes  \n ➥ Fokusoptimierung bei Bearbeitung in mehreren Durchläufen"
    const toolklick8 = "➥ Integration in Ihre Workflow- oder ERP-Software Ihres Firmennetzwerks z.B GPE der Fa. Bolasys. \n ➥ Auslösen von Gravuren und Statusabfragen einzelner Gravur-Jobs über das Netzwerk durch Ihre Workflowsoftware oder manuell. \n ➥ Bedienung über beliebige Rechner im Netzwerk oder auch über mobile Geräte \n ➥ Fernüberwachungs und Fernwartungsfunktionen";
    const toolklick9 = "➥ Beobachtung des Bearbeitsvorgangs und automatische Auslösung von Alarmen bei ungewöhnlichen Betriebszuständen.";

    const toolklick10 = "➥ Vollständig verrohrter Strahlengang. \n ➥ Seltene Reinigung der Umlenkspiegel";
    const toolklick11 = "➥ Optimierte Absaugdüse mit großem Querschnitt";
    const toolklick12 = "➥ Temperaturüberwachung wichtiger Systembestandteile z. B. der Fokuslinse und der Laser \n ➥ Überwachung des Blasluft- und des Absaugdrucks \n ➥ Speicherung der Meßwerte und graphische Darstellung zur Trenderkennung  \n ➥ Softwareaktualisierung durch Fernzugriff möglich \n ➥ Überwachung des Bearbeitungsvorgangs mit Kamera.";
    const toolklick13 = "➥ Tel: 01718500908";

    const toolklick14 = "➥ Standard mit 2 Stück eingebauten TI100 Strahlqellen. \n ➥ Andere Laser mit geringerer Leistung möglich.";
    const toolklick15 = '➥ Bei Standardlaserbestückung und ca. 1mm Gravurtiefe';
    const toolklick16 = "➥ Standardplatten A, unterschiedlicher Hersteller.";
    const toolklick17 = "➥ Kompressorkühler z.b. Hyfra oder CW6000,\n ➥ Absauggerät z.b. Teka,\n ➥ Vorabschneider z.b. Cylas VA-1 oder VA-2";

    
    


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
            
            <Textfeld titel="Effizienter Arbeitsprozess">
                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kontinuierlicher spiralförmiger Gravurpfad" 
                tooltiptext={toolklick1}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Bewegung des Materials in zwei Richtungen, Stillstand des Arbeitskopfs" 
                tooltiptext={toolklick2}></Tooltip>

            <MyVideo2 path="/videos/video3.mp4" width={257} height={275}></MyVideo2>
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

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Einfache Bedienung" 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Motorische Fokuseinstellung" 
                tooltiptext={toolklick7}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Netzwerkeinbindung" 
                tooltiptext={toolklick8}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kameraüberwachung" 
                tooltiptext={toolklick9}></Tooltip>
            
            </Textfeld> 

              {/* Drittes Textfeld */}
            
            <Textfeld titel="Geringer Wartungs-und Serviceaufwand">
               

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Wirksamer Staubschutz der optischen Komponenten" 
                tooltiptext={toolklick10}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Hocheffiziente Absaugung unmittelbar am Entstehungsort des Gummistaubs." 
                tooltiptext={toolklick11}></Tooltip>
                <div className="absaug_bild">
                    <Image src={absaugdüse} alt="absaugdüse" width={100} height={100} style={{maxWidth:"100%", height:"auto",marginLeft:"-20px"}}/><p style={{margin:"-80px -50px 50px 10px",color:"#36abb3"}}>Absaugdüse</p>
                </div>
                 
                <br/> 
                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Umfassende Diagnose- und Fernwartungsfunktionen." 
                tooltiptext={toolklick12}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kurzer Draht zum Hersteller oder" 
                tooltiptext={toolklick13}></Tooltip> <br/><Link style={{marginLeft:"35px"}} className="link-style" href="/../kontakt">Kontakt</Link>

            </Textfeld>

                {/* Viertes Textfeld */}

            <Textfeld  titel="Kurzdaten">
        
            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Laserleistung bis ca. 250 Watt" 
                tooltiptext={toolklick14}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Gravurzeit ca. 22 min, Schneidzeit kleiner 5 min für Standardgummiplatten A4" 
                tooltiptext={toolklick15}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Verwendete Gummiplatten" 
                tooltiptext={toolklick16}></Tooltip>

            <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Zubehör" 
                tooltiptext={toolklick17}></Tooltip>

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