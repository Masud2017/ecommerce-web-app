import React from 'react';
import ReactDOM from 'react-dom';

import ProductCard from '../parts/ProductCard';
import "./RegularBody.css";

function CardCollectionBody() {
    const productCardAttr = {
        img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
        name : "Dark Chocolate",
        price : "1700 BDT",
        discount : "20"

    };
    return (
             <div className = "site-body">
                    <div className = "product-row">
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr}/>
                        </div>

                    </div>
        </div>
    );
}

export default CardCollectionBody;
