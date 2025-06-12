"use client";
import { useState } from "react";
import Punkt from "../components/Punkt.jsx";
import Textfeld from "../components/Textfeld.jsx";


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