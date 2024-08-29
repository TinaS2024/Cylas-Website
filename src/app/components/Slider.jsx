"use client"

import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import bild1 from "./../image/drumfire.png";
import bild2 from "./../image/drumfire.png";
import bild3 from "./../image/drumfire.png";

/**
 * 
 * https://dev.to/ryaddev/creating-a-slider-using-nextjs-and-css-2mpa
 */


const Slider = () =>
    { 
        const bilderItems = [
            {
                id:1,
                titel: "Drumfire",
                bildpfad: bild1,               
            },
            {
                id:2,
                titel: "Flexodrum",
                bildpfad: bild2,               
            },
            {
                id:3,
                titel: "Zubehör",
                bildpfad: bild3,            
            },  
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
    
                        <div className="slider-titel zentrieren">
                            <h2>Produktübersicht</h2>
                        </div>
                            
                             <div className="row-container" id="slider">
                            {bilderItems.map((item) => (
                            <div key={item.id} className="row-item">
                             <div className="item-titel"><h4>{item.titel}</h4></div>
                             <div className="item-img"><Image src={item.bildpfad} alt={item.titel} width={250} height={250}/></div>
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