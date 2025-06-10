
const Punkt = (props) =>
{
    const {text} = props;

    return(
        <div style={{paddingLeft:"20px",display:"flex",alignItems:"flex-start"}}>
            <div className="punkt-container"></div> 
            <div style={{marginLeft:"15px",marginTop:"0px"}}><p style={{paddingLeft:"15px",textAlign:"left"}}>{text}</p></div>
     </div>
    )
}

export default Punkt;