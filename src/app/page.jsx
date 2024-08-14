
import MyVideo from "./components/MyVideo";
const Home = () =>
{
    return(

        <div className="abstand"> 
        
           <h1>Konstruktion und Herstellung von Lasermaschinen <br />für Stempel</h1>
           <br />
          
            <MyVideo></MyVideo>

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