const MyVideo = (props) =>
{
    const {path, width, height} = props;

    return(
        <div className="profile-img zentrieren"> 
       <video width={width} height={height} autoPlay controls>
            <source src={path} type="video/mp4"/>
        </video>
        </div>        

    );
}

export default MyVideo;