const MyVideo = (props) =>
{
    const {path, width, height} = props;

    return(
        <div className="profile-img video background"> 
       <video width={width} height={height} autoPlay={true} controls>
            <source src={path} type="video/mp4"/>
        </video>
        </div>        

    );
}

export default MyVideo;