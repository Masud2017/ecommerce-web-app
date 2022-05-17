import React from "react";

import "./SenderMessageTextBodyPart.css";

import profileImg from  "../../../asset/image/profile.jpg";

const MessageTextBodyPart = ()=> {
    return (
        <div className = "message-text-body-part-container">
            <img className ="message-text-body-part-img" src = {profileImg}/>
            <div className ="message-text-body-part-textbody">
                This is my change msg.🔥🔥🔥🔥🔥🔥🔥🔥
                This is my change msg.🔥🔥🔥🔥🔥🔥🔥🔥
                This is my change msg.🔥🔥🔥🔥🔥🔥🔥🔥
                This is my change msg.🔥🔥🔥🔥🔥🔥🔥🔥
                This is my change msg.🔥🔥🔥🔥🔥🔥🔥🔥
                This is my change msg.🔥🔥🔥🔥🔥🔥🔥🔥
                This is my change msg.🔥🔥🔥🔥🔥🔥🔥🔥
            </div>

        </div>
    )
}


export default MessageTextBodyPart;
