import React from "react";

import "./OrderDetails.css";
import "./CommonOrderItem.css";

import ProductImg from "../../asset/image/tshirt.png";

import iconSend from "../../asset/svg/send-svgrepo-com.svg";
import iconDone from "../../asset/svg/right-svgrepo-com.svg";
import iconClose from "../../asset/svg/close.svg";


const OrderDetails = ()=> {
    return (
        <div>
            <div className = "order-details-container">
                <img className= "order-details-img" src ={ProductImg}/>

                <div className = "order-details-name">
                    <h1>Nestle Chocolate</h1>
                    <p>Order id : #2F04329</p>
                    <p>Price Per unit : 15$</p>
                </div>
                <div className = "order-status-btn-grp">
                    <button className = "send-status-btn"><img src= {iconSend}/></button>
                    <button className = "done-status-btn"><img src = {iconDone}/></button>
                    <button className ="cancel-status-btn"><img src = {iconClose}/></button>
                </div>
            </div>

            <div></div>
        </div>
    );
}
export default OrderDetails;
