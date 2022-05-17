import React from "react";

import "./MainMessangerBody.css";
import ChatUserPart from "./parts/ChatUserPart";


import iconEmoji from "../../asset/svg/emoji.svg";
import iconAttachment from "../../asset/svg/attachment.svg";

const MainMessangerBody = ()=> {
    return (
        <div className = "messanger-container">
            <div className ="chat-user-list">
                {/* <ChatUserListInterface/> */}
                <ChatUserPart/>
            </div>
            <div className="chat-body-p">
                <div className = "chat-body-text">
                    <div className = "message-text-body" name = "message-text-body">
                        Hello
                    </div>


                    <div className = "chat-text" name = "message-text-box">
                        <div className = "msg-icon-container">
                            <div className = "msg-icon-bg">
                                <img src = {iconEmoji} className = "msg-icon" />
                            </div>
                            <div className = "msg-icon-bg">
                                <img src = {iconAttachment} className = "msg-icon" />
                            </div>
                        <div style={ {"width":"100%"}} >

                        <form className = "msg-form-control">
                                <input type = "text" className = "main-message-input" placeholder="Type your message here..."/>
                                <input type = "submit" class = "main-message-submit" value = "SEND"/>
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

