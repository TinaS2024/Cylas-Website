
import Image from "next/image";
import meinbild from "../image/laser.jpg";

const Home = () =>
{
    return(

        <div className="abstand"> 
        
           <h1>Konstruktion und Herstellung von Lasermaschinen <br />für Stempel</h1>
           <br />
           <div className="profile-img"><Image src={meinbild}  width={300} height={300} alt="maschinenbild"/></div>
            <p>
            <br />
             Treten Sie jederzeit mit uns in Kontakt und informieren Sie sich über das neue Magazin Graviermaschine.<br />
             
             </p>

          
     
            
            
        </div>
      

    )
}

export default Home;