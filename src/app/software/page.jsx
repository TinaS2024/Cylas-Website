"use client";
import { useState } from "react";
import Punkt from "../components/Punkt.jsx";
import Textfeld from "../components/Textfeld.jsx";
import Textfeld_Software from "../components/Textfeld_software.jsx";
import Nummer from "../components/Nummer.jsx";


const Software = () =>
    {

        const [isZoomed, setIsZoomed] = useState(false);
        const handleImageClick = () =>
        {
            if(window.innerWidth < 821)
            {
                setIsZoomed(prevIsZoomed => !prevIsZoomed);
            }
        }

        // eslint-disable-next-line react/jsx-key
        const punkte1 = ["• Weiß: Keine Trommel",<br/>,"• Grün:fertig bearbeitete Trommel",<br/>,"• Rot:RFID nicht lesbar",<br/>,"• Andere Farbe je nach Material:",<br/>,"Trommel bereit zur Bearbeitung"];
        // eslint-disable-next-line react/jsx-key
        const punkte2 = ["• Start",<br/>,"• Pause",<br/>,"• Stop",<br/>,"• Automatik"];

        return(
            <div style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
            <div className="zentrieren h1_software" style={{width:"500px"}}>    
            <h1 className="h1_software">Software für <br/>die Trommelgravierer</h1>
            </div>

            <div className="software-card">
                 <div
                    className={`software-bild ${isZoomed ? 'zoomed' : ''}`}
                    onClick={handleImageClick}
                ></div>
            <div className="software_beschreibung">
            <Textfeld_Software>
                <Nummer number="1" text="Maschinenstatus Überblick" punkte=""/>
                <Nummer number="2" text="Kamerabild" punkte=""/>
                <Nummer number="3" text="Magazinmonitor" punkte={punkte1}/>
                <Nummer number="4" text="Schalter für Laser-Versorgung,Absaugung & Motorfreigabe" punkte=""/>
                <Nummer number="5" text="Manuelle Positionssteuerung des Arbeitskopfes" punkte=""/>
            </Textfeld_Software>

            <Textfeld_Software>
                <Nummer number="6" text="Anzeige der momentanen Position des Arbeitskopfes" punkte=""/>
                <Nummer number="7" text="Anzeige und Einstellung von wichtigen Jobparametern" punkte=""/>
                <Nummer number="8" text="Name des als nächstes zu bearbeitenden Vorlage" punkte=""/>
                <Nummer number="9" text="Vorschaubild zu 8)" punkte=""/>
                <Nummer number="10" text="Name des zu 8) gehörigen Parametersatzes" punkte=""/>
                <Nummer number="11" text="Jobstatus zu 8)" punkte=""/>
                <Nummer number="12" text="Weitere Vorlagen in der Warteschlange" punkte=""/>
            </Textfeld_Software>

            <Textfeld_Software>
                 <Nummer number="13" text="Ausgeklappte Seitenleiste mit Maschinenstatus" punkte=""/>
                 <Nummer number="14" text="Leiste zur Arbeitssteuerung:" punkte={punkte2}/>
                 <Nummer number="15" text="Anzeige der Jobdauer & Zeitpunkt der Fertigstellung" punkte=""/>
                 <Nummer number="16" text="Bedienelemente zur Veränderung der Bearbeitungsreihenfolge" punkte=""/>
            </Textfeld_Software>

            </div>

            <h1 className="h1_software">Zusätzliche Software von Bolasys GmbH</h1>
            <Textfeld titel="">
                <Punkt text="Auftragsvorbereitung & Annahme"/>
                <br/>
                <Punkt text="Auftragsverwaltung"/>
                <br/>
                <Punkt text="Designer"/>
                <br/>
                <Punkt text="Nesting"/>
                <br/>
                <Punkt text="Komissionierungsmanagement"/>    
                <br/>
                <Punkt text="Interface für Graviermaschinen"/>
                <br/>
                <Punkt text="Montagestation"/>
                <br/>
                <Punkt text="Komissionierungs-& Versandmodul"/>
                   <br/>
                <Punkt text="Externe Software"/>
                <br/>
                <Punkt text="GPE-Basis"/>   
            </Textfeld>

            </div>
       


</div>
        )
    }

    export default Software;