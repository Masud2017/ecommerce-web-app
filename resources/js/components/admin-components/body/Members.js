import React from "react";

import "./Members.css";

import MemberListPart from "../parts/MemberListPart";

import iconClose from "../../asset/svg/cancel.svg";

const mber =()=> {
        document.getElementById("mber-info").style.display = "inline-block";

}

const close_mber =()=> {
    document.getElementById("mber-info").style.display = "none";
}

const Members = ()=> {
    return (
        <div className = "members-body">
            <div className = "members-heading">Members</div>
            <div className = "button-center">
                <button className = "member-button">Add New Member</button>
            </div>

            <div className = "member-list">
                <p>Member list</p>
                <a onClick = {()=>mber()}><MemberListPart/></a>
            </div>

            <div className = "member-info" id = "mber-info">
                <div className = "member-info-heading">
                    <p>Member info</p>
                    <img src = {iconClose} className = "close-member-button" onClick = {close_mber}/>
                </div>

                <div className = "member-info-button-group">
                    <div className = "member-info-body">
                        <div className = "member-info-image-group">
                            <img src = "https://yt3.ggpht.com/ytc/AKedOLQPPlIgfH6M5b4ptOkqAXu0oSLFuxy8fLLmcKEK=s800-c-k-c0x00ffffff-no-rj" name = "profile" className = "member-info-profile-image"></img>
                            <div className = "member-info-name">
                                <h4>Md Masud karim</h4>
                                <p style = {{lineHeight:"5px"}}>Admin</p>
                            </div>
                        </div>
                    </div>
                    <button className = "member-info-ban-btn">Ban</button>
                    <button className = "member-info-promote-btn">Promote</button>
                    <button className = "member-info-demote-btn">Demote</button>

                </div>


            </div>
        </div>
    );
}

export default Members;
