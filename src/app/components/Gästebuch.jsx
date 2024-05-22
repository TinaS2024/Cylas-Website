"use client"
import Gästebuch_Form from "./Gästebuch_Form";


const Gästebuch = () =>
    {
    return(
    <>
   
    <br />
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>
            <Gästebuch_Form />
        
    </div>
    </>
)
}

export default Gästebuch;

/*Für json-abfrage:
import data from "../guestbook/data.json"; 
*/

