"use client"
import Button from "./Button";
import ButtonNeu from "./Button_neu";

const Navbar = () =>
{

    return (
        <>

<div className="nav-container" style={{backgroundImage: "linear-gradient(to top,#286464,#2a8889 99%"}}> {/* background-image: linear-gradient(to top,#286464,#2a8889 99%); {{backgroundColor:"#286464"}} */}
    <ButtonNeu button_titel="Home" button_href="/home" topR="0px" topL="15px" bottomR ="0px" bottomL="15px"/>
   <ButtonNeu button_titel="Produkte" button_href="/produkte" topR="0px" topL="0px" bottomR ="0px" bottomL="0px"/>
   <ButtonNeu button_titel="Software" button_href="/software" topR="0px" topL="0px" bottomR ="0px" bottomL="0px"/>
   <ButtonNeu button_titel="Kontakt" button_href="/kontakt" topR="15px" topL="0px" bottomR ="15px" bottomL="0px"/>
 
  {/* <Link href="/" locale="en"><p>Englisch</p></Link>
   <Link href="/" locale="de"><p>Deutsch</p></Link>*/} 
   
        
</div>
 <hr className="dunkel"/>
 </>

    )
}

export default Navbar;

