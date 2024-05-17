"use client"


/* Für Client ist das fs-modul von node nicht nutzbar, sondern nur für server. 
jSON kann auch nur verwendet werden um vom server aus daten zu lesen und zu schreiben.
Für Client-Daten wäre Prisma vielleicht besser.*/

const Gästebuch_Form =  () =>
{
    const fullName = document.getElementsByName("fullName")
    const Message = document.getElementsByName("Message")


    const FormAction = async (formData) =>
        {
        const fullName = await formData.get('fullName');
        const Message = await formData.get('Message');
    
        console.log(fullName,Message)   
        var new_guest = {
          Guest: []
        };
        new_guest.Guest.push({"Name": fullName, "Nachricht": Message});
        const json = JSON.stringify(new_guest);
        /*const fs = require("fs");
        const file = fs.readFile("data.json");
        file.writeFile("data.json", json)*/
      
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

        </div>
    )


    
}

export default Gästebuch_Form;

