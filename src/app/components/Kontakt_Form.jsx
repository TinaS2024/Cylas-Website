'use client'
import { useFormState, useFormStatus } from "react-dom";


export async function FormSubmit (prevState, formData)
{
        const res = await fetch('http://localhost:3000/api/post-form-data',
        {
            method: 'POST',
            body: formData
        })

        const data = await res.json()
        return data
}


const Kontakt_Form = () =>
{
    const [state, FormAction] = useFormState(FormSubmit,'')
    const { pending } = useFormStatus()

    return(
    <div className="abstand">
        <div className="kontakt-container">
            <form action={FormAction}>  
                {state.message}
                <table className="table-container" align="left">
             
                    <tr><th>Vorname:&nbsp;</th><td>
                    <input id="firstName" type="text" size="20" /></td></tr>

                    <tr><th>Nachname:&nbsp;</th><td>
                    <input id="lastName" type="text" size="20" /></td></tr>

                    <tr><th>E-Mail:&nbsp;</th><td>
                    <input id="eMail" type="email" size="20" required/></td></tr>

                    <tr><th>Betreff:&nbsp;</th><td>
                    <input id="subject" type="text" size="20"/></td></tr>

                    <tr><th>Nachricht:&nbsp;</th><td>
                    <textarea id="message" rows={8} cols={32}/></td></tr>

                    <tr><th></th><td>
                    <input aria-disabled={pending} className="button-container" type="submit" value="abschicken" href="@mailto:t.schmidtbauer@gmx.de"/></td></tr>
                </table>
            </form>
        </div>
    </div>
    )
}

export default Kontakt_Form;