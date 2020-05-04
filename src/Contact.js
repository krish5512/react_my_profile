import React,{useState} from 'react';
import { FaLinkedinIn,FaFacebook,FaGithub,FaMailBulk,FaShareAlt,FaThumbsUp } from 'react-icons/fa';


const Contact = () => {
    const email="krk5512@gmail.com";

    const [likeCount,addCount] = useState(0);


 const updateCount = () => addCount(likeCount+1);

    return (
    <div className="divC">
    <div>
    <h1>Contact Details :</h1>
    <h1><FaLinkedinIn /> <a href="https://www.linkedin.com/in/krishna-kumar-0a530b117/">LinkedIn</a></h1>
    <h1><FaGithub /> <a href="https://github.com/krish5512">GitHub</a></h1>
    <h1><FaFacebook /> <a href="https://www.facebook.com/krishna.kumar.332">Facebook</a></h1> 
    <h1><FaMailBulk /> <a href={`mailto:${email}`}>Gmail</a></h1>
    <br/>
    <br/>
    <h2>Hit the like button if you find </h2>
    <h2>my work interesting: </h2>
    <h1 className="tab2"><FaThumbsUp onClick={updateCount}/> {likeCount}</h1>
    <h2>Also you can have PDF copy to share my profile among your friends </h2>
    <h2>Hit the button below.</h2>
    <h1 className="tab2"><FaShareAlt /> <a href="https://drive.google.com/open?id=1ownGO0lSi37-9FvQeAGoof1Cspmdm4qz">Share</a></h1>
    </div>  
    </div>
    )
}


export default Contact;