
"use client";
import Swal from "sweetalert2";

function Tooltip(props) {
    const { tooltiptitel, tooltiptext} = props;


    function showTooltext()
    {
        if(tooltiptitel && tooltiptext != null && tooltiptext !== undefined)
        {

            const htmlContent = typeof tooltiptext === 'string'
                ? tooltiptext.replace(/\n/g, '<br/>')
                : tooltiptext;

            Swal.fire({
                title:""+(tooltiptitel),
                html: htmlContent,
                confirmButtonText:"Close",
                confirmButtonColor: "#0b4250",
                customClass:{
                    popup:"my-swal2-popup",
                    htmlContainer:"my-swal2-text-container"},});
            console.log(tooltiptitel,tooltiptext)
        }
    }

    return (
        <div className="tooltip">
            <p style={{fontSize:"18px",textAlign:"left"}} onClick={showTooltext}>{tooltiptitel}</p>
            <p style={{fontSize:"20px"}}>
                <span className="tooltiptext">
                    {tooltiptext}    
                </span>
            </p>
        </div>

    );
}

export default Tooltip;