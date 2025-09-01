"use client"
import ButtonNeu from "./Button_neu";

const Navbar = () =>
{

    return (
        <>

<div className="nav-container" style={{backgroundImage: "linear-gradient(to top,#0d4251,#00121a 99%"}}> 
    <ButtonNeu button_titel="Home" button_href="/" topR="0px" topL="15px" bottomR ="0px" bottomL="15px"/>
    <ButtonNeu button_titel="Produkte" button_href="/produkte" topR="0px" topL="0px" bottomR ="0px" bottomL="0px"/>
    <ButtonNeu button_titel="Software" button_href="/software" topR="0px" topL="0px" bottomR ="0px" bottomL="0px"/>
    <ButtonNeu button_titel="Downloads" button_href="/downloads" topR="0px" topL="0px" bottomR ="0px" bottomL="0px"/>
    <ButtonNeu button_titel="Kontakt" button_href="/kontakt" topR="15px" topL="0px" bottomR ="15px" bottomL="0px"/>
 
  {/* <Link href="/" locale="en"><p>englisch</p></Link>
   <Link href="/" locale="de"><p>Deutsch</p></Link>*/} 
   
        
</div>
 <hr className="dunkel"/>
 </>

    )
}

export default Navbar;

