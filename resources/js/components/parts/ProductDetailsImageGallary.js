import React from 'react';


import "./ProductDetailsImageGallary.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faStarHalf,faStar } from '@fortawesome/free-solid-svg-icons'

const changeImage = (e)=>{
    var parentImageElement = document.getElementById("product-details-parent-image");
    parentImageElement.src = e;
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
                    <FontAwesomeIcon icon={faStarHalf} color = "red" />


                    <hr></hr>
                    <strong>Price : {props.props.price}</strong>
                    <p>Discount : {props.props.discount}</p>
            </div>
        </div>
    );
}

export default ProductDetailsImageGallary;
