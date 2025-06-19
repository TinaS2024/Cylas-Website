
const Nummer = (props) =>
{
    const {number,text,punkte} = props;

    return(
        <div style={{paddingLeft:"15px",display:"flex",alignItems:"flex-start",marginBottom:"10px"}}>
            <div><p>{number})</p></div> 
            <div style={{marginLeft:"-5px",marginTop:"0px"}}>
                <p style={{paddingLeft:"15px",textAlign:"left"}}>{text}</p>
                <p style={{paddingLeft:"15px",textAlign:"left",color:"black"}}>{punkte}</p>
                </div>
     </div>
    )
}

export default Nummer;