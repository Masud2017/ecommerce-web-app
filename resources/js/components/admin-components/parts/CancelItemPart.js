import React from "react";

import "./CommonOrderItem.css"
import ProductImg from "../../asset/image/tshirt.png";


const CancelItemPart = ()=> {
    return (
        <div className = "order-item-part-container">
            <img className = "order-item-img" src = {ProductImg}></img>
            <div className = "order-item-name">
                <h1>Nestle Chocolate</h1>
                <p>Order id  : #2F04329</p>
                <p>Price Per Unit: 15$</p>
            </div>
            <div className = "order-item-qt">
                <p>3 X 15 = 45$</p>
            </div>
            <p className = "order-status">Cancelled</p>

        </div>
    );
}

export default CancelItemPart;
