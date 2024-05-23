import { useState } from "react"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const Gästebuch_Form = () =>
{
    const [name, setName] = useState("");
    const [nachricht, setNachricht] = useState("");

    const handleForm = async () =>
        {
            e.preventDefault();

            if (name && nachricht)
                {
                    await prisma.gast.create(
                            {
                               Gast: {
                                    name: name,
                                    nachricht: nachricht,
                                }
                            })
        }};
        
    return(
        <div className="abstand" style={{display:"flex",justifyContent:"left"}}>
      
            <form onSubmit={handleForm}>  
           <div className="zentrieren"><h1>Gästebuch</h1></div>
                <table>
                    <tbody>
                    <tr><th>Vollständiger Name:&nbsp;</th><td>
                    <input type="text" size="15" value={name} onChange={(e) => setName(e.target.value)}/></td></tr>
                    <tr><th>Nachricht:&nbsp;</th><td>
                    <textarea rows={6} cols={15} value={nachricht} onChange={(e) => setNachricht(e.target.value)}/></td></tr>

                    <tr><th></th><td>
                    <input className="button-container-klein link-style" type="submit" value="abschicken"/></td></tr>
                    </tbody>
                </table>  
   
            </form>

        </div>
    )
}

export default Gästebuch_Form;

