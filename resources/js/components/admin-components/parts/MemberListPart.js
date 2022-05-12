import React from "react";

import "./MemberListPart.css";

import iconDropDown from "../../asset/svg/dropdown-svgrepo-com.svg"

const MemberListPart = ()=> {
    return (
        <div className = "member-list-part-container">
            <img src = "https://yt3.ggpht.com/ytc/AKedOLQPPlIgfH6M5b4ptOkqAXu0oSLFuxy8fLLmcKEK=s800-c-k-c0x00ffffff-no-rj" name = "profile" className = "member-user-profile-image"></img>
            <div className = "member-name">
                <h4>Md Masud karim</h4>
                <span>Admin</span>
            </div>
            <img src = {iconDropDown} className = "member-dropdown"/>

        </div>
    );
}


export default MemberListPart;
