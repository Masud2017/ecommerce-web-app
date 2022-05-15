import React from "react";

import "./OrderDetails.css";
import "./CommonOrderItem.css";

import ProductImg from "../../asset/image/tshirt.png";

import iconSend from "../../asset/svg/send-svgrepo-com.svg";
import iconDone from "../../asset/svg/right-svgrepo-com.svg";
import iconClose from "../../asset/svg/close.svg";
import iconInvoice from "../../asset/svg/invoice-svgrepo-com (1).svg";


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

            <div className = "order-details-info">
            <p>Order Date : 27 November 2022</p>
            <p>Quantity : 3</p>
            <p>Total price : 45$</p>
            <br/><br/><br/><br/>
            <p>Order Placed by : Md.Masud karim</p>
            <p>User phone : (+880)1721-600967</p>
            <p>Addres : 433 kollyanpur south paik para Mirpur-1 Dhaka -1216</p>
            <p>Email : msmasud578@gmail.com</p>
            <p>Payment procedure : Bkash/COD/Bank/Nagad/Rocket</p>
            </div>
            <div className = "order-details-last-section">
                <div className = "order-details-invoice-btn">
                    <img src = {iconInvoice} />
                </div>
            </div>
        </div>
    );
}
export default OrderDetails;
