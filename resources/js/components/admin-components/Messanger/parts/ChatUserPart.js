import React from "react";

import "./ChatUserPart.css";

import profileImg from "../../../asset/image/profile.jpg";

const ChatUserPart = (props)=> {
    return (
        <div className = "chat-user-list-interface-container">
            <img className ="chat-user-list-interface-image" src = {profileImg} alt = "Sorry something went wrong"></img>
            <div className = "chat-user-list-name">
                <h5>Md Maud karim</h5>
                <p>This is my text oh now</p>
            </div>
            <div className = "chat-user-list-time">
                <p>12:pm</p>
            </div>
        </div>
    );
}

export default ChatUserPart;
