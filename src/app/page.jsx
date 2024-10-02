"use client"
/* eslint-disable react/jsx-key */
import gravierer from "../app/videos/video2.mp4";
import MyVideo from "./components/MyVideo.jsx";



const Home = () =>
{
    return(

        <div className="abstand"> 

        
           <h2>Industrielle Produktion und Vertrieb von <br/>Lasergeräten und sonstigen physikalisch-technischen Erzeugnissen <br/>sowie Vornahme der hierzu notwendigen Investitionen <br/> in Betriebsanlagen und aller sonstigen hiermit zusammenhängenden Geschäfte.</h2>
           <br />
       <MyVideo path={gravierer} width={400} height={400}></MyVideo>
             
            <div style={{marginTop:"100px"}} className="flyer">
            <a  href="flyer_ger.pdf" download target="_blank"  rel="noopener noreferrer" alt="Flyer">
            <button className="button-container link-style" type="button">Flyer</button>
            </a></div>

            
        </div>
      

    )
}

export default Home;

/* npm run start + npm run dev */