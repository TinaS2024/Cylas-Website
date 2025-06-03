import { useState } from "react"
import swal from "sweetalert";
//https://blog.openreplay.com/working-with-databases-in-next-js-using-prisma/

const Gästebuch_Form = () =>
{
    const [fullName, setFullName] = useState("");
    const [nachricht, setNachricht] = useState("");

    const handleForm = async e =>
    { 
       
        e.preventDefault();

        if (fullName && nachricht)
            try {
                const body = {fullName,nachricht}
                 await fetch("/api/guestbook/",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body),
                });
                swal({title: "Erfolgreich",text:"Gästebuch-Eintrag wurde geschrieben!",icon:"success"});
                Response.json(body);
            } catch(error)
            {
                console.log("Fehler")
                swal({title: "Fehler",text:"Es kam zu einem Fehler beim Schreiben des Gästebuch-Eintrags!",icon:"error"});
            } 
        else
        {
            swal({title: "Info",text:"Alle Felder müssen ausgefüllt sein!",icon:"info"});
        }
    }
  
    return(
        <div className="abstand" style={{display:"flex",justifyContent:"left",marginBottom:"10px",marginLeft:"50px"}}>
      
            <form onSubmit={handleForm}>  
           <div><h1 className="h1_guestbook">Gästebuch</h1></div>
                <table width={410} className="guestbook_container">
                    <tbody>
                    <tr><th><span>Vollständiger Name:</span>&nbsp;</th>
                    <td><input type="text" size="15"  value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: "200px"}}/></td></tr>
                    <tr><th><span>Nachricht:</span>&nbsp;</th><td>
                    <textarea rows={6} cols={16}  value={nachricht} onChange={(e) => setNachricht(e.target.value)} style={{ width: "200px"}}/></td></tr>

                    <tr><th></th><td>
                    <input className="button-container-klein link-style-send" type="submit" value="Absenden" style={{marginLeft:"20px"}}/></td></tr>
                    </tbody>
                </table>  
   
            </form>

        </div>
    )
}

export default Gästebuch_Form;
