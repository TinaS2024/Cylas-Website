"use client"
/* eslint-disable react/jsx-key */
import gravierer from "../app/videos/video2.mp4";
import MyVideo from "./components/MyVideo.jsx";
import flexfire_relief from "../app/image/flexfire_relief_schief.png";
import drumfire_relief from "../app/image/drumfire_relief_trommel.png";

const Home = () =>
{
    return(

        <div className="abstand" style={{backgroundColor:"#286464",backgroundImage:`url(${drumfire_relief.src})`,backgroundSize:"30%",backgroundRepeat:"no-repeat",backgroundPosition:"right"}}> 
        <div style={{backgroundImage:`url(${flexfire_relief.src})`,backgroundSize:"26%",backgroundRepeat:"no-repeat",backgroundPosition:"left",zIndex:"1"}}>
        
           {/*<h2>Industrielle Produktion und Vertrieb von <br/>Lasergeräten und sonstigen physikalisch-technischen Erzeugnissen <br/>sowie Vornahme der hierzu notwendigen Investitionen <br/> in Betriebsanlagen und aller sonstigen hiermit zusammenhängenden Geschäfte.</h2>*/}
           <p className="landing_1">Entwicklung & Produktion von Lasergeräten</p>
           <p className="landing_1">Innovative Systemlösungen</p>
           <p className="landing_1">Professionelle Maschinenwertung</p>
           <p className="landing_1">Maßgeschneiderte Software</p>
   
                   
           <br/>
           <MyVideo path={gravierer} width={400} height={400}></MyVideo>
       
       <br/>
    
       
   

        </div>
        </div>
      

    )
}

export default Home;

