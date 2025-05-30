import Image from "next/image";
import flexfire from "../../image/flexfire.png";
import flexfire_logo from "../../image/flexfire_logo.png";

const Flexfire = () =>
{
    return(
        <>
        <div className="maschinenlogo"><Image src={flexfire_logo} alt={flexfire_logo} width={250} height={48}/> </div>
        <div style={{marginTop:"5%"}}>
        
        <div style={{textAlign:"center"}}>
             <Image src={flexfire} alt={flexfire} width={500} height={300} style={{maxWidth:"100%", height:"auto",padding:"5px"}}/>   
            </div>
        </div>
        </>

    )
}

export default Flexfire;