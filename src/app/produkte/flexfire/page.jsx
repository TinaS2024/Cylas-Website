import Subnavbar from "../../components/Subnavbar.jsx";
import Image from "next/image";
import flexfire from "../../image/flexfire.png";

const Flexfire = () =>
{
    return(
        <>
        <Subnavbar></Subnavbar>
        <div style={{marginTop:"5%"}}>
        <h1>Cylas FLEXFIRE</h1>
        <div style={{marginLeft:"35%"}}>
             <Image src={flexfire} alt={flexfire} width={600} height={400}/>   
            </div>
        </div>
        </>

    )
}

export default Flexfire;