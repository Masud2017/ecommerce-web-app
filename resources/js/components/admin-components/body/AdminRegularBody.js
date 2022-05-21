import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,useHistory
  } from "react-router-dom";



import "./AdminRegularBody.css";
import DashBoard from "./DashBoard";

import powerIcon from "../../asset/svg/power.svg";
import settingIcon from "../../asset/svg/setting.svg";
import Members from "./Members";
import PostBody from "./PostBody";
import OrderBody from "./OrderBody";
import OrderDetails from "../parts/OrderDetails";
import MainMessangerBody from "../Messanger/MainMessangerBody";


const openMessageWindow = ()=> {
    window.open("/messages","_self");
}



const AdminRegularBody = ()=> {
    const history = useHistory();
    const nav = ()=> {
        history.push("/messages");
    }

    return (
        <div name = "container" className = "admin-regular-body-container">
            <Router>
                <div name = "header-navigation" className = "admin-nav">
                    <div style = {{"text-align":"center"}}><img src = "https://yt3.ggpht.com/ytc/AKedOLQPPlIgfH6M5b4ptOkqAXu0oSLFuxy8fLLmcKEK=s800-c-k-c0x00ffffff-no-rj" name = "profile" className = "admin-profile"></img>
                        <strong><h4>Md Masud karim</h4></strong>
                        <h6>Admin</h6>
                    </div>

                <div className = "admin-nav-link">
                    <Link to= "/dashboard">DashBoard</Link>
                    <Link to = "/media">Media</Link>
                    <Link to = "/post">Post</Link>
                    <Link to = "/order">Order/Cancellation</Link>
                    <a onClick={openMessageWindow}>Messages</a>
                    <Link to = "/members">Members</Link>
                    <Link to = "/earnings">Earnings</Link>

                <div className = "admin-bottom-button-container">
                    <img src = {settingIcon} className = "admin-nav-bottom-button"/>
                    <img src = {powerIcon} className = "admin-nav-bottom-button admin-grid-right"/>
                </div>

                </div>

                </div>
                <div>

                    <Switch>
                        <Route exact path = "/dashboard">
                            <DashBoard/>
                        </Route>
                        <Route path = "/media">
                            <DashBoard/>
                        </Route>
                        <Route path = "/post">
                            <PostBody/>
                        </Route>
                        <Route path = "/order">
                            <OrderBody/>
                        </Route>
                        <Route path = "/messages">
                            <MainMessangerBody/>
                        </Route>
                        <Route path = "/members">
                            <Members/>
                        </Route>
                        <Route path = "/earnings">
                            <DashBoard/>
                        </Route>
                        <Route path = "/productdetails">
                            <OrderDetails/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default AdminRegularBody;
