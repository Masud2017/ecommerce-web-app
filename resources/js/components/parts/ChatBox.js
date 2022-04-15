import React from "react";

import "./ChatBox.css";

import ChatCard from "./ChatCard";

function ChatBox () {
    return (
        <div className = "chat-box-container">
            Message Box
            <hr style={{"margin":"0px"}} className = "msg-underline"></hr>

            <div className = "chat-body">
                <ChatCard/>
            </div>

        </div>
    );
}

export default ChatBox;
