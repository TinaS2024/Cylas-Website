"use client"
import Guestbook_entry from "./Guestbook_entry"


const Gästebuch_Form = (props) =>
{
    const fullName = document.getElementById("fullName")
    const Message = document.getElementById("Message")

    const FormAction = async(formData) =>
        {
                const fullName = await formData.get('fullName')
                const Message = await formData.get('Message') 
                console.log(fullName,Message)     
                if (FormAction)
                    {
                        const guestname = ` ${fullName} !`
                        alert("Gästebucheintrag wurde gesendet von"+guestname)     
                    }    
                   
        }   

    return(

    <div className="abstand" style={{display:"flex",justifyContent:"left"}}>
            <form action={FormAction}>  
                <table>
                    <tr><th>Vollständiger Name:&nbsp;</th><td>
                    <input id="fullName" name="fullName" type="text" size="15"/></td></tr>

                    <tr><th>Nachricht:&nbsp;</th><td>
                    <textarea id="Message" name="Message" rows={6} cols={15} /></td></tr>

                    <tr><th>{fullName}{Message}</th><td>
                    <input className="button-container-klein" type="submit" value="abschicken"/></td></tr>
                </table>  
   
            </form>
            {props.children}

        </div>

    )

    
}

export default Gästebuch_Form;

