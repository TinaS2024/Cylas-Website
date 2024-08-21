"use client"
import Button from "./Button";
import Link from "next/link";

const Navbar = () =>
{

    return (
        <>

<div className="nav-container" style={{backgroundImage: "linear-gradient(to top,#286464,#2a8889 99%"}}> {/* background-image: linear-gradient(to top,#286464,#2a8889 99%); {{backgroundColor:"#286464"}} */}
   <Button button_titel="Home" button_href="/home"/>
   <Button button_titel="Produkte" button_href="/produkte" />
   <Button button_titel="Software" button_href="/software" />
  {/* <Link href="/" locale="en"><p>Englisch</p></Link>
   <Link href="/" locale="de"><p>Deutsch</p></Link>*/} 
   
        
</div>
 <hr className="hell"/>
 </>

    )
}

export default Navbar;

