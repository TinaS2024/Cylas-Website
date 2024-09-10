import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

/* https://mui.com/material-ui/react-text-field/ */

const Kontakt = () =>
{
    const bereiche = [
        {
            value: "drumfire",
            label: "Drumfire"
        },
        {
            value: "flexodrum",
            label: "Flexodrum"
        },
        {
            value: "software",
            label: "Software"
        },
        {
            value: "zubehör",
            label: "Zubehör"
        }
    ]
   
    return(

        <div style={{marginLeft:"5%"}} className="abstand zentrieren"> 
           <form>
           <table width={450}>
            <tbody>
            <tr><td><h2 style={{marginLeft:"-5px"}}>Kontakt</h2> </td><td></td></tr>
            <tr><th>Name:</th><td><TextField variant="outlined" size="small" ></TextField></td></tr>
            <tr style={{height:"10px"}}><th></th><td></td></tr>
            <tr><th>E-Mail-Adresse:</th><td><TextField variant="outlined" size="small"></TextField></td></tr>
            <tr style={{height:"10px"}}><th></th><td></td></tr>
            <tr><th>Betreff:</th>
            <td>
            <TextField label="Bereich" select defaultValue="drumFire" helperText="Bitte Bereich auswählen">
                {bereiche.map((option) =>(
                   <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>  
                ))}
               
            </TextField>
            </td></tr>
            <tr style={{height:"10px"}}><th></th><td></td></tr>
            <tr><th>Nachricht:</th><td><TextField multiline placeholder="Fragen Sie uns etwas!" rows={4}></TextField></td></tr>
            <tr><td></td><td></td></tr>
            </tbody>
           </table> 
           </form>
        </div>
    )
}

export default Kontakt;

