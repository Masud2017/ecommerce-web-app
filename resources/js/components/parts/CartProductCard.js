import React from 'react';


import "./CartProductCard.css";

function CartProductCard(props) {
    const priceQtyStyle = {
        "display":"gird",
        "grid-template-columns": "150px 150px",
        "background-color":"red"
    };
    const nameBrandStyle = {};
    return (
        <div className = "cart-product-card-row">
            <div className= "cart-product-card-image">
                <img src = {props.props.img} alt = "somthing went wrong"  />
            </div>


        <div className = "cart-product-card-text-align">
                <div className = "text">
                        <h3>{props.props.name}</h3>
                        <p>Brand : {props.props.brand}</p>

                </div>
                <div className = "cart-product-card-text-align-2">
                    <h3>{props.props.price}</h3>
                    <h3>Qty : {props.props.qty}</h3>
                </div>
        </div>
        </div>
    );
}

export default CartProductCard;
