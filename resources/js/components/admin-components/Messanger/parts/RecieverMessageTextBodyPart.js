import React from "react";

import "./RecieverMessageTextBodyPart.css";


const RecieverMessageTextBodyPart = (props)=> {
    return (
        <div className="reciever-message-text-body-part-container">
            <div className = "reciever-message-text-body-part-text">
                {props.message}
            </div>
        </div>
    )
}

export default RecieverMessageTextBodyPart;
