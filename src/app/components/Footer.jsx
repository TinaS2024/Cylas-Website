import Image from "next/image";
import meinbild from "../image/icon-48x48_dark.png";
import Link from "next/link";

const Footer = () =>
{
    return(
        <>
        <hr className="neu"/>
        <div className="footer-container">

        <div className="cylas-logo-klein zentrieren">
        <Image src={meinbild} alt="logo" />
        </div>
    <p style={{textAlign:"center"}}>© {new Date().getFullYear()} CYLAS-AG</p>
    <div style={{textAlign:"center"}}>
        <Link className="link-style" href="/impressum">Impressum </Link>
    </div>
        
        </div>
        <hr className="neu"/>
        </>
    )
   
}

export default Footer;