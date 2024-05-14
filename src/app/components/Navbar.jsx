
import Button from "./Button";

const Navbar = () =>
{
    return (
        <>

<div className="nav-container" style={{backgroundColor:"rgb(144, 228, 203)"}}>
   <Button button_titel="Home" button_href="/home"/>
   <Button button_titel="Drumfire" button_href="/drumfire"/>
   <Button button_titel="GPE" button_href="/gpe"/>
   <Button button_titel="Kontakt" button_href="/kontakt"/>
   <Button button_titel="Impressum" button_href="/impressum"/>
        
</div>
 <hr className="neu"/>
 </>

    )
}

export default Navbar;