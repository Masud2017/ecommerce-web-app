import React, { useState } from "react";

import "./MainMessangerBody.css";
import ChatUserPart from "./parts/ChatUserPart";


import iconEmoji from "../../asset/svg/emoji.svg";
import iconAttachment from "../../asset/svg/attachment.svg";
import SenderMessageTextBodyPart from "./parts/SenderMessageTextBodyPart";
import RecieverMessageTextBodyPart from "./parts/RecieverMessageTextBodyPart";

import Picker from 'emoji-picker-react';

const submitMsgForm = (event)=> {
    event.preventDefault();
    alert(event.data);
}


const MainMessangerBody = ()=> {

    const [msgText, setMsgText] = useState("");
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [emojiCollectionClick, setEmojiCollectionClick] = useState(false);

    const handleMsgChange = (event)=> {
        setMsgText(event.target.value);d

    }

    const showMessageEmojiCollectionToogle = ()=> {
        if (emojiCollectionClick) {
            document.getElementById("message-emoji-collection").style.display = "none"
            setEmojiCollectionClick(false);

        } else {
            document.getElementById("message-emoji-collection").style.display = "block"
            setEmojiCollectionClick(true);
        }
    }

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div className = "messanger-container">
            <div className ="chat-user-list">
                {/* <ChatUserListInterface/> */}
                <ChatUserPart/>
            </div>
            <div className="chat-body-p">
                <div className = "chat-body-text">
                    <div className = "message-text-body" name = "message-text-body">
                        User name
                    </div>

                    <SenderMessageTextBodyPart/>
                    <RecieverMessageTextBodyPart message={msgText}/>



                    <div className = "chat-text" name = "message-text-box">
                        <div className = "message-emoji-collection" id ="message-emoji-collection">
                            <Picker onEmojiClick={onEmojiClick} />
                        </div>
                        <div className = "msg-icon-container">
                            <div className = "msg-icon-bg">
                                <img src = {iconEmoji} className = "msg-icon" onClick={showMessageEmojiCollectionToogle}/>
                            </div>
                            <div className = "msg-icon-bg">
                                <img src = {iconAttachment} className = "msg-icon" />
                            </div>
                        <div style={ {"width":"100%"}} >



                        {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )} */}


                        {/* <span id = "showable">{msgText}</span> */}
                        <form className = "msg-form-control">
                                <textarea type = "text" className = "main-message-input" name = "msg" placeholder="Type your message here..." autoComplete="off" onChange={handleMsgChange}/>
                                {/* <input type = "text" className = "main-message-input" name = "msg" placeholder="Type your message here..." autoComplete="off"/> */}

                                <input type = "submit" class = "main-message-submit" onClick={submitMsgForm} value = "SEND"/>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
}

export default MainMessangerBody;

