"use client"

import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import bild1 from "./../image/drumfire.png";
import bild2 from "./../image/flexfire.png";
import drumfire_logo from "../image/drumfire_logo.png";
import flexfire_logo from "../image/flexfire_logo_hell.png";
import Link from "next/link";



const Slider = () =>
    { 
        const bilderItems = [
            {
                id:1,
                logo:drumfire_logo,
                titel:"Drumfire",
                bildpfad: bild1,  
                width:300,
                height:150,      
                link: "/produkte/drumfire",      
            },
            {
                id:2,
                logo: flexfire_logo,
                titel:"Flexfire",
                bildpfad: bild2,    
                width:185,
                height:150,   
                link: "/produkte/flexfire",    
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
            if(slider)
            {
                console.log("Vorher: scrollLeft:", slider.scrollLeft, "clientWidth:", slider.clientWidth, "scrollWidth:", slider.scrollWidth);
                slider.scrollLeft = slider.scrollLeft - 235;
                console.log("Nachher: scrollLeft:", slider.scrollLeft);
            }
            else{
                console.error("Slider-Element nicht gefunden!");
            }
            
            
        };

        const slideRight = () =>
        {
            let slider = document.getElementById("slider");
            slider.scrollLeft = slider.scrollLeft + 235;
            console.log("Slide nach Rechts");
        };
        
    
        return(
        <>
            <div>
                <div className="slider_rahmen zentrieren">
                        
                             <div className="row-container" id="slider">
                            {bilderItems.map((item) => (
                            <div key={item.id} className="row-item">
                             <div className="item-titel"><Image src={item.logo} alt={item.titel} width={120} height={50} style={{objectFit: "contain"}}/></div>
                             <div className="item-img">
                             <Link href={item.link}>
                             <Image src={item.bildpfad} alt={item.titel} width={item.width} height={item.height} style={{objectFit: "contain"}}/>
                             </Link>
                                
                                </div>
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