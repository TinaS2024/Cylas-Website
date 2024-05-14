import Link from "next/link";
const Button = (props) =>
    {
     
        const button_titel = props.button_titel;
        const button_href = props.button_href;

        return(
            <div className="button-container">
                <Link className="link-style"  href={button_href} >{button_titel}</Link>
            </div>
        )
    }

export default Button;