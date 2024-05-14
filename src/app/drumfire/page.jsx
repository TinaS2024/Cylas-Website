import Punkt from "../components/Punkt.jsx";

const Drumfire = () =>
{
    return(
        <div className="abstand">
            <h1>Cylas Trommelgravierer DRUMFIRE für Stempeltextplatten</h1>
            <br />

            <Punkt text="&nbsp; Höchster Durchsatz durch Trommeltechnik mit automatischer Beladung und hoher Laserleistung."/>
            <br />
            <Punkt text= "&nbsp; Hohe Verfügbarkeit duch staubgeschützten geschlossenen Strahlengang und wartungsarme Mechanik." />
            <br />
            <Punkt text="&nbsp; Software zum Anschluss an Produktionssteuerungssteme und Webshops." />
            <br />
            <Punkt text="&nbsp; Wartungsunterstützung durch Diagnosesoftware." />
            <br />
            <p>Hier können Sie sich einen Flyer unseres Produktes runterladen.</p>
            <div className="zentrieren">
                 <a  href="flyer_ger.pdf" download target="_blank"  rel="noopener noreferrer" alt="Flyer">
            <button className="button-container link-style" type="button">Flyer</button>
            </a>
            
            </div>
           
            
        </div>

    )
}

export default Drumfire;