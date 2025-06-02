
const Punkt = (props) =>
{
    const {text} = props;

    return(
        <div style={{paddingLeft:"20px", display:"flex",alignItems:"flex-start"}}>
            <div className="punkt-container"></div> 
            <div style={{marginLeft:"10px"}}><p style={{textAlign:"left"}}>{text}</p><br /></div>
     </div>
    )
}

export default Punkt;