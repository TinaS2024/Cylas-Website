import Subnavbar from "../../components/Subnavbar.jsx";
import Image from "next/image";
import flexfire from "../../image/flexfire.png";

const Flexfire = () =>
{
    return(
        <>
        {/*<Subnavbar></Subnavbar>*/}
        <div style={{marginTop:"5%"}}>
        <h1>FLEXFIRE</h1>
        <div style={{textAlign:"center"}}>
             <Image src={flexfire} alt={flexfire} width={500} height={300} style={{maxWidth:"100%", height:"auto",padding:"5px"}}/>   
            </div>
        </div>
        </>

    )
}

export default Flexfire;