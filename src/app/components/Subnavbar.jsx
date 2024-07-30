import Button from "./Button";

const Subnavbar = () =>
{
    return (

        <div className="nav-container abstand-unten" style={{height: "60px",marginTop:"-5px"}}>
        <Button button_titel="Drumfire" button_href="/produkte/drumfire"/>
        <Button button_titel="Flexodrum" button_href="/produkte/flexodrum"/>
        <Button button_titel="Zubehör" button_href="/produkte/zubehoer"/>
         </div>

    )
}

export default Subnavbar;

