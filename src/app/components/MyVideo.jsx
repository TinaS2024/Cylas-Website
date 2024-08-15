const MyVideo = (props) =>
{
    const {path, width, height} = props;

    return(
        <div className="profile-img zentrieren video"> 
       <video width={width} height={height} controls>
            <source src={path} type="video/mp4"/>
        </video>
        </div>        

    );
}

export default MyVideo;