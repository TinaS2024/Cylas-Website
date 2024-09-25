
"use client"
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

const MyModal = (props) =>
{
   const {onOpen,isOpen,onOpenChange} = useState()
    const {titel,inhalt,className} = props

    return(
        <div className={className} style={{marginTop:"25px"}}>
        <Link className="link-style"  onClick={isOpen} href="" >...mehr</Link>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2]"}}>
            
            <ModalContent>
                {(onClose) =>
                (
                    <>
                    <ModalHeader><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></ModalHeader>
                    <ModalBody><p style={{fontSize: "14pt"}} className="text-white">{inhalt}</p>
                    </ModalBody>
                    </>       
                )

                }
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default MyModal;