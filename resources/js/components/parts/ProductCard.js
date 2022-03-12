import React from 'react';
import ReactDOM from 'react-dom';

import "./product-card.css";

function ProductCard(props) {
    return (
        <div name = "product-card" className = "product-card">
            <div className = "discount">{props.props.discount}%</div>
            <img src = {props.props.img} alt = "nothing is showings" style={{"width":"100%"}}/>
            <hr></hr>
            <div>
                <h4>{props.props.name}</h4>
                <strong>{props.props.price}</strong>
            </div>
            <hr></hr>
            <div>
                <button className='product-btn' style ={{"margin":"5px"}}>Buy</button>
                <button className='product-btn'>Add to cart</button>

            </div>
        </div>
    );
}

export default ProductCard;

// ReactDOM.render(<ProductCard />, document.getElementById('productBody'));
