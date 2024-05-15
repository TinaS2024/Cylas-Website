import Guestbook_entry from "../components/Guestbook_entry.jsx";
import Gästebuch_Form from "../components/Gästebuch_Form.jsx";

const Gästebuch = () =>
{

    return(
    <div>
    <h1>Gästebuch</h1>
    <br />
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>

        <Gästebuch_Form>
            <Guestbook_entry fullName="Tina" Message="Dies ist ein Gästebucheintrag."/>
            <Guestbook_entry fullname="Gerald" Message="Dies ist ein zweiter Gästebucheinrag."/>
        </Gästebuch_Form>
        
     </div>
    </div>
    )
    
}

export default Gästebuch;

