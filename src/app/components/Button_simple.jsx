
"use client"
import {Button} from "@nextui-org/button";

const ButtonSimple = (props) =>
    {
     
        const {button_titel} = props

        return(
            <Button variant="flat" style={{background:"none",border:"none",fontSize:"16px",fontFamily:"sans-serif"}}>{button_titel}</Button>
        )
    }

export default ButtonSimple;