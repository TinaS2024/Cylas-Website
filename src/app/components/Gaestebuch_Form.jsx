import { useState } from "react"

const Gästebuch_Form = () =>
{
    const [fullName, setFullName] = useState("");
    const [nachricht, setNachricht] = useState("");

    const handleForm = async e =>
    { 
       
        e.preventDefault();

        if (fullName && nachricht)
            try {
                const body = {fullName, nachricht}; 
                await fetch("/api/route.jsx",{
                    method: "POST",
                    headers: {"content-Type": "application/json"},
                    body: JSON.stringify(body),
                });
                console.log(body)
                /* die api/route wird nicht gelesen und ausgeführt */
            
            } catch
            {
                console.log("Fehler")
            } 
        else
        {
            alert("Alle Felder müssen ausgefüllt sein!")
        }
    }
  
    return(
        <div className="abstand" style={{display:"flex",justifyContent:"left"}}>
      
            <form onSubmit={handleForm}>  
           <div className="zentrieren"><h1>Gästebuch</h1></div>
                <table>
                    <tbody>
                    <tr><th><span>Vollständiger Name:</span>&nbsp;</th><td>
                    <input type="text" size="15"  value={fullName} onChange={(e) => setFullName(e.target.value)}/></td></tr>
                    <tr><th><span>Nachricht:</span>&nbsp;</th><td>
                    <textarea rows={6} cols={15}  value={nachricht} onChange={(e) => setNachricht(e.target.value)}/></td></tr>

                    <tr><th></th><td>
                    <input className="button-container-klein link-style" type="submit" value="abschicken"/></td></tr>
                    </tbody>
                </table>  
   
            </form>

        </div>
    )
}

export default Gästebuch_Form;
