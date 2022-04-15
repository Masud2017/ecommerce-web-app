import React,{useEffect} from "react";

import "./ChatCard.css";


function trimString (text) {
    // word count : 19
    var trimmedString = text;
    count = text.length
    if (count > 19) {
        trimmedString = text.substring(0,19);
    }
    console.log("Running this portion : "+trimmedString);
    return trimmedString;
}

function ChatCard (props) {
    // useEffect(
    //     ()=> {
    //     trimString("Hesdfsdfsdfsdfsdfsd");

    //     }
    // );
    return (
        <div className = "chat-card-container">
            <img src = {props.props.img}  className = "chat-card-img"></img>
            <div className= "chat-card-name">
                <h5>{props.props.name}</h5>
                <p>{props.props.hint}</p>
            </div>
            <p className = "chat-card-time">{props.props.time}</p>
        </div>
    );
}
export default ChatCard;
