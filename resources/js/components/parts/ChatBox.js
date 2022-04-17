import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


import "./ChatBox.css";

import ChatCard from "./ChatCard";
import MsgBody from "./MsgBody";

// import {chatBoxOpen} from "../../_util/ChatBoxUtil";

function ChatBox () {
    const attribute =
        [
            {
                id : 1,
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                id : 2,
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                id : 3,
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                id : 4,
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                id : 5,
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                id : 6,
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },
            {
                id : 7,
                img : "https://avatars.githubusercontent.com/u/33942219?v=4",
                name : "Masud karim",
                hint  : "Hey bro can bro are you ther ? ",
                time : "12:45pm"
            },

        ];

    return (
        <div className = "chat-box-container" id ="msgElement">
            <div className = "chat-msg-box-heading">Message Box</div>
            <hr style={{"margin":"0px"}} className = "msg-underline"></hr>

            <div className = "chat-body" id = "chatBody">
                    {attribute.map(item=> (<ChatCard props = {item}/> ))}
            </div>

        </div>
    );
}

export default ChatBox;
