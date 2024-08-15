import gravierer from "../app/videos/video2.mp4";
import MyVideo from "./components/MyVideo";

/* https://www.freepik.com/search?format=search&last_filter=page&last_value=6&page=6&query=website+banner+&selection=1#uuid=73b20187-f7e2-43ff-9c1f-8d2c9403a164 */

const Home = () =>
{
    return(

        <div className="abstand"> 
        
           <h2>Konstruktion und Herstellung von Lasermaschinen <br/>für Stempel</h2>
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