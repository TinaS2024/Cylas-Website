"use client"
import gravierer from "../videos/video2.mp4";
import MyVideo from "../components/MyVideo";
import useTranslation from "next-translate/useTranslation";

const Home = () =>
{
    const {t} = useTranslation("common");
    const example = t("titel_header")


    return(

        <div className="abstand"> 
        
           <h1>Konstruktion und Herstellung von Lasermaschinen <br />für Stempel</h1>
         {/*  <h1>{example}</h1>*/} 
           <br />
          
            <MyVideo path={gravierer} width={400} height={400}></MyVideo>

            <p>
            <br />
             Treten Sie jederzeit mit uns in Kontakt und informieren Sie sich über das neue Magazin Graviermaschine.<br /><br />
             </p>
             
             <p style={{textAlign:"center"}}><span>Hier können Sie sich einen Flyer unseres Produktes runterladen.</span></p>
             <div className="nav-container">
                 <a  href="flyer_ger.pdf" download target="_blank"  rel="noopener noreferrer" alt="Flyer">
            <button className="button-container link-style" type="button">Flyer</button>
            </a>
            </div>
            
        </div>
    )
}

export default Home;

/* npm run start + npm run dev */