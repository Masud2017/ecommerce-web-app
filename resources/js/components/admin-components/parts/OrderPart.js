import React from "react"
import OrderItemPart from "./OrderItemPart";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const OrderPart = ()=> {
    return (
        <div>
            <OrderItemPart/>
            <OrderItemPart/>
            <OrderItemPart/>
            <OrderItemPart/>
            <OrderItemPart/>
            <OrderItemPart/>
            <OrderItemPart/>
        </div>
    );
}

export default OrderPart;
