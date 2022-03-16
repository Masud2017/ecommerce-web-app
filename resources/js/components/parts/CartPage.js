import React from 'react';
import ReactDOM from 'react-dom';

import "./CartPage.css";

import CartProductCard from './CartProductCard';

function CartPage() {
    const cartAttribute = {
        img: "https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
        name : "Nestley Chocolate",
        price : "1700 BDT",
        brand : "Nestle",
        qty : "1"
    };
    return(
        <div className = "cart-grid-parent">
            <div name = "left-section">
                <div className = "cart-product-list-parent-div">
                    <div className = "cart-product-heading">
                        Package 1 of 1
                        Delete
                    </div>
                    <CartProductCard props = {cartAttribute}/>
                    <CartProductCard props = {cartAttribute}/>
                    <CartProductCard props = {cartAttribute}/>


                </div>
            </div>


            <div name = "right-section">
                <div className ="order-summary">
                    <h1>Order Summary</h1><br></br>
                    <h3>Subtotal</h3><br></br>
                    <h3>Shipping charge</h3><br></br>
                    <form>
                        <input type = "text" placeholder='Enter your voucher code' className='order-summary-voucher'/>
                        <input type = "submit" className = "order-summary-voucher-btn" value = "APPLY"/>
                    </form>
                    <p>Total</p><br></br>
                    <div style  = {{"text-align":"center"}}>
                        <button className = "cart-procceed-btn">Procceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;
