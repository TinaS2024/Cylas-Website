"use client"
/* eslint-disable react/jsx-key */
import gravierer from "../app/public/video2.mp4";
import MyVideo from "./components/MyVideo.jsx";


const Home = () =>
{
    return(

        <div className="abstand bg-drum"> 
        <div className="bg-flex">
        
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

