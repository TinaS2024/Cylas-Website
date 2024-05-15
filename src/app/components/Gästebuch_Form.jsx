"use client"

const Gästebuch_Form = (props) =>
{
    const FormAction = async(formData) =>
        {
            const fullName = formData.get('fullName')
            const Message = formData.get('Message')
            console.log(`${fullName} ${Message}`)  
        }

    return(
    <div className="abstand" style={{display:"flex",justifyContent:"left"}}>
            <form action={FormAction}>  
                <table>
                    <tr><th>Vollständiger Name:&nbsp;</th><td>
                    <input id="fullName" name="fullName" type="text" size="15"/></td></tr>

                    <tr><th>Nachricht:&nbsp;</th><td>
                    <textarea id="Message" name="Message" rows={6} cols={15} /></td></tr>

                    <tr><th></th><td>
                    <input className="button-container-klein" type="submit" value="abschicken" /></td></tr>
                </table>  
   
            </form>
            {props.children}
        </div>

    )
}

export default Gästebuch_Form;

