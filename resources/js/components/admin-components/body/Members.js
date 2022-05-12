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

            </div>
        </div>
    );
}

export default Members;
