"use client"
/* eslint-disable react/jsx-key */
import gravierer from "../app/public/Schneiden_kurz.mp4";
import MyVideo from "./components/MyVideo.jsx";


const Home = () =>
{
    return(

        <div className="abstand bg-drum"> 
        <div className="bg-flex">
        
           <p className="landing_1">Entwicklung & Produktion von Lasergeräten</p>
           <p className="landing_1">Innovative Systemlösungen</p>
           <p className="landing_1">Professionelle Maschinenwartung</p>
           <p className="landing_1">Maßgeschneiderte Software</p>
   
                   
           <br/>
           <MyVideo path={gravierer} width={400} height={400}></MyVideo>
       
       <br/>
    
       
   

        </div>
        </div>
      

    )
}

export default Home;

