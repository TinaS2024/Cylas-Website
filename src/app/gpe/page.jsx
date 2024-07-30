import Punkt from "../components/Punkt.jsx";
import Textfeld from "../components/Textfeld.jsx";
import Image from "next/image";
import img1 from "../image/Graviermaschine.png";
import img2 from "../image/Bediensoftware.png";
import img3 from "../image/Auftragsverwaltung.png";
import img4 from "../image/Lagermanagement.png";
import img5 from "../image/Verpackung.png";

const GPE = () =>
    {
        return(
            <div>
            <div className="zentrieren">    
            <h1>Graphical Products Environment</h1>
            </div>
            <Textfeld titel="Graviermaschine">
                <div  className="profile-img">  
                <Image src={img1} width={70} height={70} alt="graviermaschine"/>
                </div>
          
                <Punkt text="&nbsp;Trommelverfahren"/>
                <Punkt text="&nbsp;Hohe Produktivität"/>
                <Punkt text="&nbsp;Geringer Wartung- und Serviceaufwand"/>
                <Punkt text="&nbsp;Kundennähe"/>
            </Textfeld>


            <Textfeld titel="Bediensoftware">
                <div className="profile-img"> 
                <Image src={img2} width={70} height={70} alt=""/>
                </div>
           
                <Punkt text="&nbsp;Intuitive Bedienbarkeit"/>
                <Punkt text="&nbsp;Maschinenüberwachung"/>
            </Textfeld>
    
            <Textfeld titel="Auftragsverwaltung">
            <div className="profile-img"> 
                <Image src={img3} width={70} height={70} alt=""/>
                </div>
                <Punkt text="&nbsp;Neue Aufträge nach Vorlage" />
                <Punkt text="&nbsp;Automatisches Erstellen von Aufträgen"/>
                <Punkt text="&nbsp;Auftragsstatus-Monitor"/>
                <Punkt text="&nbsp;Workflow- und Prozessauswahl"/>
                <Punkt text="&nbsp;Datenaustausch mit externer Software"/>    
            </Textfeld>

            <Textfeld titel="Lagermanagement">
            <div className="profile-img"> 
                <Image src={img4} width={70} height={70} alt=""/>
                </div>
                <Punkt text="&nbsp;App zur Kommissionierung"/>
                <Punkt text="&nbsp;Erstellung von Komponentenlisten nach Gummiplatten und Lagerfach"/>
                <Punkt text="&nbsp;Datenaustausch mit externer Warenwirschaft"/>
            </Textfeld>
   
            <Textfeld titel="Montageprogramm">
            <div className="profile-img"> 
                <Image src={img5} width={70} height={70} alt=""/>
                </div>
                <Punkt text="&nbsp;Zuordnung von Textplatten und Gehäusen"/>
                <Punkt text="&nbsp;Ausdruck der Versandpapiere"/>
                <Punkt text="&nbsp;Berechung Verpackungsvolumen"/>
                <Punkt text="&nbsp;Datenübergabe an Versanddienstleister"/>
            </Textfeld>

</div>
        )
    }

    export default GPE;