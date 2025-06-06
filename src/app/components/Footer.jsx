import Image from "next/image";
import neuLogo  from "../image/logo_hell.png";
import Link from "next/link";

const Footer = () =>
{
    return(
        <>
        <hr className="neu"/>
        <div className="footer-container">

        <div className="cylas-logo-klein zentrieren">
        <Image src={neuLogo} alt="logo" width={60} height={60} />
        </div>
        <div className="impressum_abstand">
    <p style={{textAlign:"center",color:"white"}}>© {new Date().getFullYear()} CYLAS-AG</p>
    <div style={{textAlign:"center"}}>
        <Link className="link-style" href="/impressum">Impressum |</Link>
        <Link className="link-style" href="/guestbook">| Gästebuch </Link>
    </div>
    </div>
        
        </div>
        <hr className="dunkel"/>
        </>
    )
   
}

export default Footer;