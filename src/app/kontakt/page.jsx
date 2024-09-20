"use client"
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { useState } from "react";
import swal from "sweetalert";

const Kontakt = () =>
{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [bereich,setBereich] = useState("")
    const [nachricht,setNachricht] = useState("")

    const handleSubmit = async (e)=>
    {
        e.preventDefault()

        try
        {
          const res = await fetch("/api/kontakt/",{
            method: "POST", 
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              username,
              email,
              bereich,
              nachricht,
            }), 
          });
          swal({title: "Erfolgreich",text:"E-Mail wurde an Cylas gesendet!",icon:"success"})
          res.json()
     
        } catch (error)
        {
          console.error("Fehler", error)
          swal({title: "Fehler",text:"Es gab ein Problem beim Versenden der E-Mail!",icon:"error"})
        }
    }

    const bereiche = [
        {
            value: "Drumfire",
            label: "Drumfire"
        },
        {
            value: "Flexodrum",
            label: "Flexodrum"
        },
        {
            value: "Software",
            label: "Software"
        },
        {
            value: "Zubehör",
            label: "Zubehör"
        }
    ]
   
    return(

        <div> 
        <h2>Kontakt</h2>
           <form onSubmit={handleSubmit}>
           <table width={450} className="abstand contact_container">
            <tbody>
            <tr><th>Name:</th><td>
                <TextField required variant="outlined" placeholder="Vollständiger Name" size="small" value={username} onChange={(e) =>setUsername(e.target.value)}></TextField>
            </td></tr>
            <tr style={{height:"10px"}}><th></th><td></td></tr>
            <tr><th>E-Mail-Adresse:</th><td>
                <TextField required type="email" variant="outlined" placeholder="E-Mail-Adresse" size="small" value={email} onChange={(e) =>setEmail(e.target.value)}></TextField>
            </td></tr>
            <tr style={{height:"10px"}}><th></th><td></td></tr>
            <tr><th>Betreff:</th>
            <td>
            <TextField required label="Bereich" select defaultValue="drumFire" helperText="Bitte Bereich auswählen" value={bereich} onChange={(e) =>setBereich(e.target.value)}>
                {bereiche.map((option) =>(
                   <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>  
                ))}
               
            </TextField>
            </td></tr>
            <tr style={{height:"10px"}}><th></th><td></td></tr>
            <tr><th>Nachricht:</th><td><TextField required multiline placeholder="Fragen Sie uns etwas!" rows={4} value={nachricht} onChange={(e) =>setNachricht(e.target.value)}></TextField></td></tr>
            <tr><td></td><td><Button type="submit" value="Submit" className="button-container-klein">Absenden</Button></td></tr>
            </tbody>
           </table> 
           </form>
        </div>
    )
}

export default Kontakt;

