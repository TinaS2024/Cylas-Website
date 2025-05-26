import Button from "./Button";

const Subnavbar = () =>
{
    return (

        <div id="subnav" className="sub-nav-container abstand-unten" style={{height: "60px",marginTop:"-5px",backgroundImage: "linear-gradient(to bottom,#286464,#2a8889 99%"}}> {/*  backgroundColor:"#2a8889"*/}
        <Button button_titel="DrumFire" button_href="/produkte/drumfire"/>
        <Button button_titel="FlexFire" button_href="/produkte/flexfire"/>
        {/*<Button button_titel="Zubehör" button_href="/produkte/zubehoer"/>*/}
         </div>

    )
}

export default Subnavbar;

