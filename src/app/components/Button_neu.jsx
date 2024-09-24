
"use client"
import Link from "next/link";

const ButtonNeu = (props) =>
    {
     
        const {button_titel, button_href, topR, topL,bottomR,bottomL} = props

        return(
            <div id="button_column" className="button-neu" 
            style={{
                borderTopRightRadius: `${topR}`,
                borderTopLeftRadius: `${topL}`,
                borderBottomRightRadius: `${bottomR}`,
                borderBottomLeftRadius: `${bottomL}`,
                }}
            >
                <Link className="link-style"  href={button_href}>{button_titel}</Link>
            </div>
        )
    }

export default ButtonNeu;