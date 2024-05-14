import Image from "next/image";
import meinbild from "../image/icon-48x48.png";

const Footer = () =>
{
    return(
        <>
        <hr className="neu"/>
        <div className="footer-container">

        <div className="cylas-logo-klein">
        <Image src={meinbild} alt="logo" />
        </div>
    <p style={{textAlign:"center"}}>© {new Date().getFullYear()} CYLAS-AG</p>
        </div>
        <hr className="neu"/>
        </>
    )
   
}

export default Footer;