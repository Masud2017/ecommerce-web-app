import { set } from "lodash";
import React, { useEffect, useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import CancellationPart from "../parts/CancellationPart";
import DonePart from "../parts/DonePart";
import OrderDetails from "../parts/OrderDetails";
import OrderPart from "../parts/OrderPart";

import "./OrderBody.css";




const OrderBody = ()=> {
    const [state,setState] = useState(null);

    ()=> {
        alert("Hello");
        document.getElementById("order").click();
    }

    const nav_Selector = (event)=> {
        if (state == null) {

            setState(document.getElementById("order"));
            state.style.borderBottom = "none";


            event.target.style.borderBottom = "5px solid white";
            setState(event.target); // capturing the previous stuff


        }


        state.style.borderBottom = "none";


        // alert(state);
        event.target.style.borderBottom = "5px solid white";
        setState(event.target); // capturing the previous stuff

    }

    return (
        <div>
            <div className ="order-heading">
                Order/Cancellation
            </div>
            <div>
                <Router>
                <div className = "order-list-heading">
                    <div className = "order-nav">
                        <span onClick = {nav_Selector} id = "order" ><Link to = "/order">Order</Link></span>
                        <span onClick = {nav_Selector} id = "order" ><Link to = "/cancel">Cancellation</Link></span>
                        <span onClick = {nav_Selector} id = "order" ><Link to="/done">Done</Link></span>
                    </div>

                </div>
                <Switch>
                    <Route path = "/order">
                        <OrderPart/>
                    </Route>
                    <Route path = "/cancel">
                        <CancellationPart/>
                    </Route>
                    <Route path = "/done">
                        <DonePart/>
                    </Route>
                </Switch>
                </Router>
            </div>
        </div>
    )
}

export default OrderBody;
