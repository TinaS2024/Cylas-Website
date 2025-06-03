
"use client";
import swal from "sweetalert";

function Tooltip(props) {
    const { tooltiptitel, tooltiptext} = props;


    function showTooltext()
    {
        if(tooltiptitel && tooltiptext != null)
        {
            swal({title:""+(tooltiptitel),text:""+tooltiptext,icon:"info",button:"Close"});
            console.log(tooltiptitel,tooltiptext)
        }
    }

    return (
        <div className="tooltip">
            <p style={{fontSize:"16px",textAlign:"left"}} onClick={showTooltext}>{tooltiptitel}</p>
            <p style={{fontSize:"20px"}}>
                <span className="tooltiptext">
                    {tooltiptext}    
                </span>
            </p>
        </div>

    );
}

export default Tooltip;