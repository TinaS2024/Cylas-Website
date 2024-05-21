"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";

/* https://stackoverflow.com/questions/77022084/form-not-submitting-data-through-orm-prisma-to-database */

const Gästebuch_Form = () =>
{

    const [name, setName] = useState("");
    const [nachricht, setNachricht] = useState("");
    const [error, setError] = useState("");
    const [message,setMessage] = useState("");

    const router = useRouter();

    const handleForm = async (data) =>
        {
            e.preventDefault();
            setError("");
            setMessage("");
            if (name && nachricht)
                {
                    try{
              
                        const newGuest = await fetch("components/AddGuestPost",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(data),
                            }
                        );
                        if (newGuest.ok)
                            {
                                router.push()
                            }
                
                    } catch (error)
                    {
                        console.error(error);
                    }
                }
                else{
                        setError("Alle Felder müssen ausgefüllt sein.");
                        return;
                    }
                }
        
        
    return(
        <div className="abstand" style={{display:"flex",justifyContent:"left"}}>
            <form onSubmit={handleForm}>  
            {
                error ? (
                    <div className="error form-group">
                        {error}
                    </div>
                ) : null
            }
            {
                message ? (
                    <div className="message form-group">
                        {message}
                    </div>
                ) : null
            }
                <table>
                    <tr><th>Vollständiger Name:&nbsp;</th><td>
                    <input type="text" size="15" value={name} onChange={(e) => setName(e.target.value)}/></td></tr>

                    <tr><th>Nachricht:&nbsp;</th><td>
                    <textarea rows={6} cols={15} value={nachricht} onChange={(e) => setNachricht(e.target.value)}/></td></tr>

                    <tr><th></th><td>
                    <input className="button-container-klein" type="submit" value="abschicken"/></td></tr>
                </table>  
   
            </form>

        </div>
    )
}

export default Gästebuch_Form;

