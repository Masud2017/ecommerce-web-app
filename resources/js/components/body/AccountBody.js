import React from "react";

import "./AccountBody.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


import ManageAccount from "../parts/ManageAccount";
import MyOrders from "../parts/MyOrders";
import MyReviews from "../parts/MyReviews";
import MyReturns from "../parts/MyReturns";
import MyCancellation from "../parts/MyCancellation";


/**
 * Component for the account body
 * @param props - contain all the info according the accound body.
 */
function AccountBody() {
    return (
        <div>
            <Router>
                <div className = "account-parent" style = {{"margin-top":"15px"}}>
                        <div>
                            <h5 style = {{"color":"#727272"}}>Hello, User</h5>
                                <h3 style = {{"margin-top":"70px"}}><Link index to ="/account" >My Account</Link></h3>
                                <h3><Link to = "/myorders">My Orders</Link></h3>
                                <div style = {{"margin-left":"20px"}}>
                                    <h4><Link to = "/myreturns">My Returns</Link></h4>
                                    <h4><Link to = "/mycancellation">My Cancellation</Link></h4>
                                </div>
                                <h3><Link to = "/myreviews">My Reviews</Link></h3>
                        </div>

                        <div>
                            <Switch>
                                <Route exact path="/account">
                                    <ManageAccount/>
                                </Route>

                                <Route path="/myorders">
                                    <MyOrders/>
                                </Route>
                                <Route path = "/myreviews">
                                    <MyReviews/>
                                </Route>
                                <Route path = "/myreturns">
                                    <MyReturns/>
                                </Route>
                                <Route path = "/mycancellation">
                                    <MyCancellation/>
                                </Route>
                            </Switch>
                        </div>
                </div>
            </Router>
        </div>
    );
}

export default AccountBody;
