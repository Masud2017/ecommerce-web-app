import React from "react";

import "./ChatCard.css";

function ChatCard () {
    return (
        <div>
            <img src = "https://avatars.githubusercontent.com/u/33942219?v=4"  className = "chat-card-img"></img>
            <h6 className = "chat-card-name">Name</h6>
            <p className="chat-card-hint">This is hint msg</p>
            <p className = "chat-card-time">12:57am</p>
        </div>
    );
}
export default ChatCard;
