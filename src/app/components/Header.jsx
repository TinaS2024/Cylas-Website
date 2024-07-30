import Image from "next/image";
import meinbild from "../image/bg7.png";

const Header = () =>
    {
        return(
<>
            <div className="header-container"> 
            <div className="image-container">
            <Image className="cylas-logo-klein" src={meinbild} width={150} height={150} alt="logo"/>
            </div>
            
             <div className="titel-container">
             <h3><br />
             Gravier- und Lasertechnologie für den internationalen Markt
             </h3>
          
            </div>
           
            
            </div>

             <hr className="neu"/>
             </>
        )
    }

export default Header;