"use client"

import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import bild1 from "./../image/drumfire.png";
import bild2 from "./../image/flexfire.png";
import bild3 from "./../image/404.png";


const Slider = () =>
    { 
        const bilderItems = [
            {
                id:1,
                titel: "DrumFire",
                bildpfad: bild1,  
                width:300,
                height:200,             
            },
            {
                id:2,
                titel: "FlexFire",
                bildpfad: bild2,    
                width:150,
                height:200,           
            },
            /*
            {
                id:3,
                titel: "Zubehör",
                //bildpfad: bild3,   
                width:50,
                height:150         
            },  */
        ];
    
        const slideLeft = () =>
        {
            let slider = document.getElementById("slider");
            slider.scrollLeft = slider.scrollLeft - 235;
        };

        const slideRight = () =>
        {
            let slider = document.getElementById("slider");
            slider.scrollLeft = slider.scrollLeft + 235;
        };
        
    
        return(
        <>
            <div>
                <div className="slider slider_rahmen zentrieren">
                        
                             <div className="row-container" id="slider">
                            {bilderItems.map((item) => (
                            <div key={item.id} className="row-item">
                             <div className="item-titel"><h4>{item.titel}</h4></div>
                             <div className="item-img"><Image src={item.bildpfad} alt={item.titel} width={item.width} height={item.height} style={{objectFit: "contain"}}/></div>
                             </div>
            ))}
           
                </div>
                        
                        <div className="slider-button zentrieren">
                                <button className="btn-links" title="scroll links" onClick={slideLeft}>
                                    <AiOutlineArrowLeft />
                                </button>
                                <button className="btn-rechts" title="scroll rechts" onClick={slideRight}>
                                    <AiOutlineArrowRight />
                                </button>
                         </div>
            </div>  
            </div>
         
         </>
        )
    }
    
    export default Slider;