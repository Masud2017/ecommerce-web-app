import React from "react";
import "./DashBoard.css";

import iconMsg from "../../asset/svg/msg.svg";
import iconEarning from "../../asset/svg/earning.svg";
import iconMember from "../../asset/svg/member.svg";
import iconOrder from "../../asset/svg/order.svg";
import iconPost from "../../asset/svg/post.svg";
import iconMedia from "../../asset/svg/media.svg";

import CardCollectionBody from "../../body/CardCollectionBody";


const DashBoard = ()=> {
    return(
        <div className = "admin-body">
                <div name = "first-portion" className = "dashboard-first-portion">
                    <div className = "dash-board-heading">DashBoard</div>
                    <div className = "icon-row">
                        <div className = "icon-container">
                            <img src= {iconMsg} className = "row-icon-design" />
                            <p>Messages</p>
                        </div>

                        <div className = "icon-container">
                            <img src= {iconEarning} className = "row-icon-design" />
                            <p>Earnings</p>
                        </div>

                        <div className = "icon-container">
                            <img src= {iconMember} className = "row-icon-design" />
                            <p>Members</p>
                        </div>

                        <div className = "icon-container">
                            <img src= {iconOrder} className = "row-icon-design" />
                            <p>Orders</p>
                        </div>

                        <div className = "icon-container">
                            <img src= {iconPost} className = "row-icon-design" />
                            <p>Posts</p>
                        </div>

                        <div className = "icon-container">
                            <img src= {iconMedia} className = "row-icon-design" />
                            <p>Media</p>
                        </div>
                    </div>
                </div>
                <CardCollectionBody/>
                <CardCollectionBody/>
                <CardCollectionBody/>
        </div>
    );
}


export default DashBoard;
