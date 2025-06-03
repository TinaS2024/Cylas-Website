const MyVideo2 = (props) =>
{
    const {path, width, height} = props;

    return(
        <div className="profile-img video2"> 
       <video width={width} height={height} autoPlay={false} controls>
            <source src={path} type="video/mp4"/>
        </video>
        </div>        

    );
}

export default MyVideo2;