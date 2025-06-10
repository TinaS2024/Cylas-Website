import Image from "next/image";
import flexfire from "../../image/flexfire.png";
import flexfire_logo from "../../image/flexfire_logo.png";
import absaugdüse from "../../image/Absaugdüse.png";
import vorabschneider from"../../image/Vorabscheider.png";

import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";

const Flexfire = () =>
{

    const toolklick1 = "➥Trommeldurchmesser von 50mm-200mm zur Gravur von Gummiplatten bis ca. 62cm x 85cm oder Sleeves bis 85cm Länge. \n ➥Faserlaser zur Erzielung höherer Auflösung einsetzbar. \n ➥Trommeln mit Klemmvorrichtung für A4-Gummiplatten verfügbar";
    const toolklick2 = "➥Führt zu bester Gravurqualität durch Vermeidung bidirektionaler Gravur und langer Lebensdauer der Achsmechanik durch Vermeidung abrupter Bewegungsvorgänge.";
    const toolklick3 = "➥Die X-Bewegung (schnelle Achse) erfolgt durch die Drehung der Trommel,die Y-Bewegung wird durch verschieben des Arbeitskopfes entlang der Trommelachse dargestellt.";
    const toolklick4 = "➥Führt zu geringeren Staub- und Geruchsproblemen.";

    const toolklick5 = "➥Der Ethernetanschluss gestattet die Verbindung mit Workflow- oder ERP-Software in Ihrem Firmennetzwerk. \n ➥Ein geeignetes Workflow-System wird von der Fa.Bolasys angeboten (GPE). \n ➥Gravuren können über das Netzwerk ausgelöst werden und der Status einzelner Gravur-Jobs und damit auch einzelner Aufträge abgefragt werden. \n ➥Die Bedienung kann über beliebige Rechner im Netzwerk oder auch über Mobile Geräte erfolgen. \n ➥Die Netzwerkanbindung gestattet die Abfrage des Maschinenstatus und die Durchführung von Wartungsmaßnahmen.";
    const toolklick6 = "➥Die Kameraüberwachung gestattet die Beobachtung des Bearbeitungsvorgangs und automatische Auslösung von Alarmen bei ungewöhnlichen Betriebszuständen.";

    const toolklick7 = "➥Durch abgeschlossenen Strahlengang.";
    const toolklick8 = "➥Führt zu sauberer Maschine und längeren Reinigungsintervallen.";
    const toolklick9 = "➥Überwachung des Maschinenstatus über das Netzwerk. \n ➥Überwachung des Bearbeitungsvorgangs mit Kamera.";
    const toolklick10 = "➥Tel.: 01718500908";

    const toolklick11 = "➥Standard mit 2 Sütck eingebauten TI100 Strahlquellen. \n ➥Einbau anderer Laser mit geringerer Leistung oder Faserlaser höherer Leistung möglich.";
    const toolklick12 = '➥Bei Standardlaserbestückung ca. eine A4-Seite/22 min,Schneiddauer bei "normalen" Stempeln kleiner als 5 Minuten.';
    const toolklick13 = "➥Standardplatten A4, unterschiedlicher Hersteller";
    const toolklick14 = "➥Kompressorkühler z.b. Hyfra oder CW6000, \n ➥Absauggerät z.b. Teka, \n ➥Vorabschneider z.b. Cylas VA-1 oder VA-2";

    const toolklick15 = "➥Die Fokuseinstellung erfolgt automatisch durch Auswahl des Materialparametersatzes."
    const toolklick16 = "➥Anpassung der Betriebssofware an den Kundenseitigen Produktionsprozess möglich."


    return(
        <>
        <div className="maschinenlogo"><Image src={flexfire_logo} alt={flexfire_logo} width={250} height={48}/> </div>
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

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Hocheffiziente Absaugung unmittelbar am Entstehungsort des Gummistaubs." 
                tooltiptext={toolklick4}></Tooltip>

                <div className="absaug_bild">
                    <Image src={absaugdüse} alt="absaugdüse" width={100} height={100} style={{maxWidth:"100%", height:"auto",marginLeft:"-20px"}}/><p style={{margin:"-80px -50px 50px 10px",color:"#36abb3"}}>Absaugdüse</p>
                </div>

                </Textfeld>

                <div className="flexfire_image"><Image src={flexfire} alt={flexfire} className="flexfire_style"/></div>
               

                {/* Zweites Textfeld */}

                <Textfeld titel="Hohe Produktivität durch optimale Einbindung in Ihre Produktionsprozesse">


                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Motorische Z-Achse" 
                tooltiptext={toolklick15}></Tooltip> 

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Netzwerkeinbindung" 
                tooltiptext={toolklick5}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kameraüberwachung" 
                tooltiptext={toolklick6}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Softwareanpassungen nach Kundenwunsch" 
                tooltiptext={toolklick16}></Tooltip> 

                </Textfeld>
            </div>

            <div className="textFieldsContainer2_b textFieldsContainer2 zweite_leiste"> 

                {/* Drittes Textfeld */}

                <Textfeld titel="Geringer Wartungs- und Serviceaufwand">

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Wirksamer Schutz der optischen Komponenten" 
                tooltiptext={toolklick7}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Staubabsaugung mit optimierter Düse in nächster Nähe zum Entstehungsort" 
                tooltiptext={toolklick8}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Umfassende Diagnose- und Fernwartungsfunktionen" 
                tooltiptext={toolklick9}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Kurzer Draht zum Hersteller" 
                tooltiptext={toolklick10}></Tooltip>

                </Textfeld>

                {/* Viertes Textfeld */}

                <Textfeld titel="Systemdaten">

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Laserleistung bis ca. 250 Watt" 
                tooltiptext={toolklick11}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Gravurleistung, Schneidleistung für normale Stempelgummiplatten" 
                tooltiptext={toolklick12}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Verwendete Gummiplatten" 
                tooltiptext={toolklick13}></Tooltip>

                <Punkt text="&nbsp;"/><Tooltip tooltiptitel="Zubehör" 
                tooltiptext={toolklick14}></Tooltip>

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