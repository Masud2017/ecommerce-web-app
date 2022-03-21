import React from 'react';

import "./CartPage.css";

function ProcceedToCheckoutPage () {
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
                    <CartProductCard props = {cartAttribute}/>
                    <CartProductCard props = {cartAttribute}/>
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

export default ProcceedToCheckoutPage;
