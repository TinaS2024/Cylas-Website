
import Button from "./Button";

const Navbar = () =>
{
    return (
        <>

<div className="nav-container" style={{backgroundColor:"rgb(99, 152, 155)"}}>
   <Button button_titel="Home" button_href="/home"/>
   <Button button_titel="Produkte" button_href="/produkte"/>
   <Button button_titel="Chat" button_href="/chat"/>
   <Button button_titel="Kontakt" button_href="/kontakt"/>
        
</div>
 <hr className="hell"/>
 </>

    )
}

export default Navbar;

