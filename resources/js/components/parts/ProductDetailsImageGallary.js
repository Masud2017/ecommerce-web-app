import React from 'react';


import "./ProductDetailsImageGallary.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

/**
 *
 * @param {*} img - img content to be show in the parent div
 * This method is responsible of changing the parent image as per the click on each child image
 */
const changeImage = (img)=>{
    var parentImageElement = document.getElementById("product-details-parent-image");
    parentImageElement.src = img;
}

const incrementCounter = ()=> {
    var prevVal = parseInt(document.getElementById("product-qty").textContent);
    document.getElementById("product-qty").innerHTML = prevVal+1;
}

const decrementCounter = ()=> {
    var prevVal = parseInt(document.getElementById("product-qty").textContent);
    if (prevVal >= 1) {
        document.getElementById("product-qty").innerHTML = prevVal-1;
    }
}

/**
 *
 * @param {*} props - Json of attibute for the Product details image gallary.
 * @returns ProductDetailsImageGallary - Component
 */
function ProductDetailsImageGallary(props) {
    const imageArray = props.props.imgCollection;
    return (
        <div className = "product-details-grid-parent">
            <div>
                <div  className= "ProductDetailsImageGallary-parent-image"><img style = {{"width":"100%","height":"100%"}} alt = "something went wrong" src = {props.props.imgCollection[0]} id = "product-details-parent-image"/></div>
                <center>
                <div className = "image-group">
                    {imageArray.map((img)=>(
                        <img src = {img} className = "ProductDetialsImageGallary-child-img" alt = "something went wrong"  onClick = {()=>changeImage(img)} />
                    ))}
                </div>
                </center>
            </div>
            <div className = "product-details-iamge-gallary-text">
                    <h3>{props.props.name}</h3>
                    <p style = {{"color":"#5F3AF8","line-height":"5px"}}><span style = {{"color": "grey"}}>Brand:</span> {props.props.brand}</p>
                    <FontAwesomeIcon icon={faStar} color = "red" />
                    <FontAwesomeIcon icon={faStar} color = "red" />
                    <FontAwesomeIcon icon={faStar} color = "red" />
                    <FontAwesomeIcon icon={faStar} color = "red" />
                    <FontAwesomeIcon icon={faStarHalfStroke} color = "red"/> {props.props.ratingCount} Ratings

                    <hr></hr>
                    <strong>Price : {props.props.price}</strong>
                    <p>Discount : {props.props.discount}</p>
                    <p>Quantity <button className = "product-details-quantity-btn" onClick = {()=>decrementCounter()}>-</button> <p style = {{"display":"inline"}} id = "product-qty">{props.props.quantity}</p> <button onClick = {()=>incrementCounter()} className = "product-details-quantity-btn">+</button></p>


                    <div style = {{"text-align":"center"}} className = "product-details-btn-group">

                        <button className = "product-details-btn">Add to Cart</button>
                        <button className = "product-details-btn right-btn-align">Buy</button>
                    </div>

            </div>
        </div>
    );
}

export default ProductDetailsImageGallary;
