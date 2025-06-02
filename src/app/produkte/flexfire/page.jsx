import Image from "next/image";
import flexfire from "../../image/flexfire.png";
import flexfire_logo from "../../image/flexfire_logo.png";

import Textfeld from "../../components/Textfeld.jsx";
import Punkt from "../../components/Punkt.jsx";
import Tooltip from "@/app/components/Tooltip.jsx";

const Flexfire = () =>
{
    return(
        <>
        <div className="maschinenlogo"><Image src={flexfire_logo} alt={flexfire_logo} width={250} height={48}/> </div>
        <div style={{marginTop:"5%"}}>
        
        <div style={{textAlign:"center"}}>

        <div className="flexfire_abstand">
            <div className="textFieldsContainer"> 
                <Textfeld titel="Textfeld 1">
                </Textfeld>
                    <Image src={flexfire} alt={flexfire} className="flexfire_style"/> 

                <Textfeld titel="Textfeld 2">
                </Textfeld>
            </div>

            <div className="textFieldsContainer zweite_leiste"> 
                <Textfeld titel="Textfeld 3">
                </Textfeld>
                <Textfeld titel="Textfeld 4">
                </Textfeld>
                <Textfeld titel="Textfeld 5">
                </Textfeld>
            </div>
        </div>

        </div>
        </div>
        </>

    )
}

export default Flexfire;