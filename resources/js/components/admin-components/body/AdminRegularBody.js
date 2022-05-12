import React from "react";

import "./AdminRegularBody.css";
import DashBoard from "./DashBoard";

import powerIcon from "../../asset/svg/power.svg";
import settingIcon from "../../asset/svg/setting.svg";
import Members from "./Members";

const AdminRegularBody = ()=> {
    return (
        <div name = "container" className = "admin-regular-body-container">
            <div name = "header-navigation" className = "admin-nav">
                <div style = {{"text-align":"center"}}><img src = "https://yt3.ggpht.com/ytc/AKedOLQPPlIgfH6M5b4ptOkqAXu0oSLFuxy8fLLmcKEK=s800-c-k-c0x00ffffff-no-rj" name = "profile" className = "admin-profile"></img>
                    <strong><h4>Md Masud karim</h4></strong>
                    <h6>Admin</h6>
                </div>

            <div className = "admin-nav-link">
                <a>DashBoard</a>
                <a>Media</a>
                <a>Post</a>
                <a>Order/Cancellation</a>
                <a>Messages</a>
                <a>Members</a>
                <a>Earnings</a>

            <div className = "admin-bottom-button-container">
                <img src = {settingIcon} className = "admin-nav-bottom-button"/>
                <img src = {powerIcon} className = "admin-nav-bottom-button admin-grid-right"/>
            </div>

            </div>



            </div>
            <div>
                {/* <DashBoard/> */}
                <Members/>
            </div>
        </div>
    );
}

export default AdminRegularBody;
