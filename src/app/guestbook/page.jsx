import { readFile } from "fs";
import Gästebuch_Form from "../components/Gästebuch_Form.jsx";
import Guestbook_entry from "../components/Guestbook_entry.jsx";
import { Guest } from "../guestbook/data.json"; 

const Gästebuch = async () =>
    {
//Readfile File from Json

    return(
    <div>
    <h1>Gästebuch</h1>
    <br />
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>

        <Gästebuch_Form>
            <Guestbook_entry fullName={Guest.Name} Message={Guest.Nachricht}/>

        </Gästebuch_Form>

     </div>
    </div>
    )
    
}

export default Gästebuch;

