import Image from "next/image";
import meinbild from "../image/bg7_dark.png";
import neuLogo  from "../image/logo_hell.png";

const Header = () =>
    {
        return(
<>
            <div className="header-container"> 
            <div className="image-container">
            <Image className="cylas-logo-klein" src={neuLogo} width={200} height={150} alt="logo"/>
            </div>
            
             <div className="titel-container neon">
             <h3><br />
                Gravier- und Lasertechnologie für höchste Produktivität
             </h3>
          
            </div>
            
            </div>

             <hr className="dunkel"/>
             </>
        )
    }

export default Header;