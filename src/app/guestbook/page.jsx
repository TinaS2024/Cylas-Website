import Gästebuch_Form from "../components/Gästebuch_Form.jsx";
import Guestbook_entry from "../components/Guestbook_entry.jsx";
import data from "../guestbook/data.json"; 


const Gästebuch = async () =>
    {
        const Guest = data.Guest

    return(
    <div>
    <h1>Gästebuch</h1>
    <br />
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>

        <Gästebuch_Form />
        <Guestbook_entry fullName={data.Guest[0].Name} Message={data.Guest[0].Nachricht}/>
        <Guestbook_entry fullName={data.Guest[1].Name} Message={data.Guest[1].Nachricht}/>


     </div>
    </div>
    )
    
}

export default Gästebuch;

