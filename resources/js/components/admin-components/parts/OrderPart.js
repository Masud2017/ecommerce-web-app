import React from "react"
import OrderItemPart from "./OrderItemPart";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


const openOrderDetailsWindow = ()=> {
    window.open("/productdetails","_self");
}

const OrderPart = ()=> {
    return (
        <div>
            <div onClick={openOrderDetailsWindow}><OrderItemPart/></div>
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
