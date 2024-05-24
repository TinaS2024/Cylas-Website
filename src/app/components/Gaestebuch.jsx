"use client"
import Gaestebuch_Form from "./Gaestebuch_Form";


const Gaestebuch = () =>
    {
    return(
    <>
   
    <br />
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>
            <Gaestebuch_Form />
        
    </div>
    </>
)
}

export default Gaestebuch;

/*Für json-abfrage:
import data from "../guestbook/data.json"; 
*/

