
"use client"
import Link from "next/link";

const Button = (props) =>
    {
     
        const {button_titel, button_href} = props

        return(
            <div className="button-container">
                <Link className="link-style-send"  href={button_href} >{button_titel}</Link>
            </div>
        )
    }

export default Button;