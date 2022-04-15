import React from "react";

import "./ChatBox.css";

import ChatCard from "./ChatCard";

function ChatBox () {
    const attribute =
        [
            {
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            }
        ];

    return (
        <div className = "chat-box-container">
            <div className = "chat-msg-box-heading">Message Box</div>
            <hr style={{"margin":"0px"}} className = "msg-underline"></hr>

            <div className = "chat-body">
                {attribute.map(item=> (<ChatCard props = {item}/>))}
            </div>

        </div>
    );
}

export default ChatBox;
