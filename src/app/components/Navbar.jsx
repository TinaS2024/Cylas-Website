
import Button from "./Button";

const Navbar = () =>
{
    return (
        <>

<div className="nav-container" style={{backgroundColor:"rgb(99, 152, 155)"}}>
   <Button button_titel="Home" button_href="/home"/>
   <Button button_titel="Drumfire" button_href="/drumfire"/>
   <Button button_titel="GPE" button_href="/gpe"/>
        
</div>
 <hr className="hell"/>
 </>

    )
}

export default Navbar;

