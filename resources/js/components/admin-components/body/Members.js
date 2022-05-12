import React from "react";

import "./Members.css";

import MemberListPart from "../parts/MemberListPart";

const Members = ()=> {
    return (
        <div className = "members-body">
            <div className = "members-heading">Members</div>
            <div className = "button-center">
                <button className = "member-button">Add New Member</button>
            </div>

            <div className = "member-list">
                <p>Member list</p>
                <MemberListPart/>
            </div>
        </div>
    );
}

export default Members;
