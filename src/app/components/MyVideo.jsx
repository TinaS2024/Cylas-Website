import gravierer from "../videos/video2.mp4";

const MyVideo = () =>
{
    return(
        <div className="profile-img zentrieren items-center"> 
       <video width={400} height={400} autoPlay>
            <source src={gravierer} type="video/mp4"/>
        </video>
        </div>        

    );
}

export default MyVideo;