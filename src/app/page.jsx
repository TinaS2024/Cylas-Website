

import Image from "next/image";
import meinbild from "../app/image/laser.jpg";

export default function Home() {
  return (
    <div className="rahmen-container">
        <div className="abstand"> 
        
        <h1>Konstruktion und Herstellung von Lasermaschinen <br />für Stempel</h1>
        <br />
        <div className="profile-img"><Image src={meinbild}  width={300} height={300} alt="maschinenbild"/></div>
         <p>
         <br />
          Treten Sie jederzeit mit uns in Kontakt und informieren Sie sich über das neue Magazin Graviermaschine.<br />
          
          </p>

         </div>
     </div>
  );
}

/* next dev */
/* next build */
/* next start */
/*https://kinsta.com/de/blog/next-js-portfolio/
https://www.youtube.com/watch?v=BeXbCgRxifs&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=15
*/

/* Auf dem Heimrechner geht nur npm run dev */