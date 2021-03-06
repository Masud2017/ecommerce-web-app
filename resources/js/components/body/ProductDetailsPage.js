import React from 'react';


import "./ProductDetailsPage.css";

import ProductDetailsImageGallary from '../parts/ProductDetailsImageGallary';
import QuestionAndAnswerBody from './QuestionAndAnswerBody';
import ProductReview from '../parts/ProductReview';
import ProductDetailsDescription from "../parts/ProductDetailsDescription";

function ProductDetailsPage () {
    const productDetailsImageInfo = {
        name:"Nestle chocolate",
        price : "1200 BDT",
        imgCollection: [
            "https://bakingtoolbox.com/wp-content/uploads/2021/08/Homemade-Chocolate-Bars.jpg",
            "http://prod-upp-image-read.ft.com/0c029740-677b-11e5-a57f-21b88f7d973f",
            "https://i.insider.com/5b5854de77bc281a008b4686?width=700"
        ],
        discount: "30%",
        brand:"The Evergreen Brand",
        ratingCount : "165",
        review : 4.6,
        quantity:1
    };


    const descriptionAttribute = {
        "description":"Hello world this is the product description. And this is the final thing .. lol I am so smart.",
        "specList":["One","two","leamon","orange"]
    };

    return (
        <div className = "product-details-parent">
            <div className = "product-details-page-grid">
                <div>
                    <ProductDetailsImageGallary props = {productDetailsImageInfo}/>
                    <ProductDetailsDescription props = {descriptionAttribute}/>
                    <ProductReview/>
                    <QuestionAndAnswerBody/>
                </div>
                <div className = "product-details-address">
                    <p>Delivary option</p>
                    <h4>433 kollyanpur south paik para mirpur-1 dhaka -1216</h4>
                </div>
            </div>

        </div>
    );
}

export default ProductDetailsPage;
