import Image from "next/image";
import flexfire from "../../image/flexfire.png";
import flexfire_logo from "../../image/flexfire_logo.png";
import absaugdüse from "../../image/Absaugdüse.png";
import vorabschneider from"../../image/Vorabscheider.png";

import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";
import Link from "next/link";

const Flexfire = () =>
{

    const toolklick1 = "➥ Trommeldurchmesser von 50mm-200mm zur Gravur von Gummiplatten bis ca. 62cm x 85cm oder Sleeves bis 85cm Länge. \n\n ➥ Faserlaser zur Erzielung höherer Auflösung einsetzbar. \n\n ➥ Trommeln mit Klemmvorrichtung für A4-Gummiplatten verfügbar";
    const toolklick2 = "➥ Hohe Gravurqualität durch gleichförmige Bewegung \n\n ➥ Keine Vorlauf-Rücklauf-Korrektur notwendig \n\n ➥ Längere Lebensdauer der Achsmechanik aufgrund geringerer mechanischer Belastung";
    const toolklick3 = "➥ Verringerung des Platzbedarfs durch Split-Axis Aufbau. \n\n ➥ X-Bewegung (schnelle Achse) durch die Trommeldrehung. \n\n ➥ Y-Bewegung durch Verschieben des Arbeitskopfes entlang der Trommelachse.";
    const toolklick4 = "➥ Geringere Staubentwicklung in der Machine und im Arbeitsraum. ➥ Geringere Geruchsentwicklung. \n\n ➥ Längere Reinigungsintervalle";
    
    const toolklick5 = "➥ Automatische Fokuseinstellung durch Auswahl des Materialparametersatzes. \n\n ➥ Fokusoptimierung bei Bearbeitung in mehreren Durchläufen"
    const toolklick6 = "➥ Integration in Ihre Workflow- oder ERP-Software Ihres Firmennetzwerks z.B GPE der Fa. Bolasys. \n\n ➥ Auslösen von Gravuren und Statusabfragen einzelner Gravur-Jobs über das Netzwerk durch Ihre Workflowsoftware oder manuell. \n\n ➥ Bedienung über beliebige Rechner im Netzwerk oder auch über mobile Geräte \n\n ➥ Fernüberwachungs und Fernwartungsfunktionen";
    const toolklick7 = "➥ Beobachtung des Bearbeitsvorgangs. \n\n ➥ Automatische Auslösung von Alarmen bei ungewöhnlichen Betriebszuständen.";
    const toolklick8 = "➥ Anpassung der Betriebssofware an den Kundenseitigen Produktionsprozess möglich."

    const toolklick9 = "➥ Vollständig verrohrter Strahlengang. \n\n ➥ Seltene Reinigung der Umlenkspiegel";
    const toolklick10 = "➥ Optimierte Absaugdüse mit großem Querschnitt. \n\n ➥ Längere Reinigungsintervalle";
    const toolklick11 = "➥ Temperaturüberwachung wichtiger Systembestandteile z. B. der Fokuslinse und der Laser \n\n ➥ Überwachung des Blasluft- und des Absaugdrucks \n\n ➥ Speicherung der Meßwerte und graphische Darstellung zur Trenderkennung  \n\n ➥ Softwareaktualisierung durch Fernzugriff möglich \n\n ➥ Überwachung des Bearbeitungsvorgangs mit Kamera.";
    const toolklick12 = "➥ Tel.: 01718500908";

    const toolklick13 = "➥ Standard mit 2 Sütck eingebauten TI100 Strahlquellen. \n\n ➥ Einbau anderer Laser mit geringerer Leistung oder Faserlaser höherer Leistung möglich.";
    const toolklick14 = "➥ Bei Standardlaserbestückung und ca. 1mm Gravurtiefe";
    const toolklick15 ="➥ Abhängig von der verwendeten Trommel und der Antriebsvariante";
    const toolklick16 = "➥ Standardplatten A4, unterschiedlicher Hersteller";
    const toolklick17 = "➥ Kompressorkühler z.b. Hyfra oder CW6000, \n\n ➥ Absauggerät z.b. Teka, \n\n ➥ Vorabschneider z.b. Cylas VA-1 oder VA-2";

   
    
    


    return(
        <>
        <div className="maschinenlogo"><Image src={flexfire_logo} alt="flexfire_logo" width={250} height={48}/> </div>
        <h1>Trommelgravierer für Sleeves bis 84 cm Länge <br/> und Gummiplatten bis ca. 84 cm x 62 cm </h1>
        <div style={{marginTop:"5%"}}>
        
        
       

        <div className="flexfire_abstand">
            <div className="textFieldsContainer2_a textFieldsContainer2"> 

                 {/* Erstes Textfeld */}

                <Textfeld titel="Arbeitsweise">

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Vielfältige Einsatzmöglichkeiten" 
                tooltiptext={toolklick1}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kontinuierlicher spiralförmiger Gravurpfad" 
                tooltiptext={toolklick2}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Split Axis verfahren" 
                tooltiptext={toolklick3}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Hocheffiziente Staubabsaugung mit optimierter Düse unmittelbar am Entstehungsort." 
                tooltiptext={toolklick4}></Tooltip>

                <div className="absaug_bild">
                    <Image src={absaugdüse} alt="absaugdüse" width={100} height={100} style={{maxWidth:"100%", height:"auto",marginLeft:"-20px"}}/><p style={{margin:"-80px -50px 50px 10px",color:"#36abb3"}}>Absaugdüse</p>
                </div>

                </Textfeld>

                <div className="flexfire_image"><Image src={flexfire} alt="Flexfire Maschine" className="flexfire_style" layout="respnsive" width={flexfire.width} height={flexfire.height}/></div>
               

                {/* Zweites Textfeld */}

                <Textfeld titel="Hohe Produktivität durch optimale Einbindung in Ihre Produktionsprozesse">


                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Motorische Fokuseinstellung" 
                tooltiptext={toolklick5}></Tooltip> 

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Netzwerkeinbindung" 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kameraüberwachung" 
                tooltiptext={toolklick7}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Softwareanpassungen nach Kundenwunsch" 
                tooltiptext={toolklick8}></Tooltip> 

                </Textfeld>
            </div>

            <div className="textFieldsContainer2_b textFieldsContainer2 zweite_leiste"> 

                {/* Drittes Textfeld */}

                <Textfeld titel="Geringer Wartungs- und Serviceaufwand">

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Wirksamer Staubschutz der optischen Komponenten" 
                tooltiptext={toolklick9}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Hocheffiziente Absaugung unmittelbar am Entstehungsort des Gummistaubs" 
                tooltiptext={toolklick10}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Umfassende Diagnose- und Fernwartungsfunktionen" 
                tooltiptext={toolklick11}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kurzer Draht zum Hersteller oder" 
                tooltiptext={toolklick12}></Tooltip> <br/><Link style={{marginLeft:"35px"}} className="link-style" href="/../kontakt">Kontakt</Link>

                </Textfeld>

                {/* Viertes Textfeld */}

                <Textfeld titel="Kurzdaten">

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Laserleistung bis ca. 250 Watt" 
                tooltiptext={toolklick13}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Gravurzeit ca. 22 min" 
                tooltiptext={toolklick14}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Schneidzeit" 
                tooltiptext={toolklick15}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Verwendete Gummiplatten" 
                tooltiptext={toolklick16}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Zubehör" 
                tooltiptext={toolklick17}></Tooltip>

            <div className="scheider_bild">
                  <Image src={vorabschneider} alt="vorabscheider" width={80} height={240}/><p style={{margin:"-130px -50px 50px 10px",color:"#36abb3"}}>Vorabscheider<br/> VA-1</p>
            </div>

                </Textfeld>
             
            </div>
        </div>

        </div>
    
        </>

    )
}

export default Flexfire;