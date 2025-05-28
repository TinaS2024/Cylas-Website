
const Punkt = (props) =>
{
    const {text} = props;

    return(
        <div style={{paddingLeft:"20px"}} >
            <div className="punkt-container"></div> 
            <div><p style={{textAlign:"left"}}>{text}</p><br /></div>
     </div>
    )
}

export default Punkt;