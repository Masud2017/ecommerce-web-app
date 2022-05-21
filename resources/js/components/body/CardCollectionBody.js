import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import ProductCard from '../parts/ProductCard';
import "./RegularBody.css";

function CardCollectionBody() {
    const productCardAttr = [
        {
            id: 1,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 2,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },
        {
            id: 3,
            img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
            name : "Dark Chocolate",
            price : "1700 BDT",
            discount : "20"

        },

    ];
    return (
             <div className = "site-body">
                    <div className = "product-row">
                        {/* {productCardAttr.map(item=>(<div className = "product-column">
                            <ProductCard props = {item}/>
                        </div>))} */}
                        <div className = "product-column">
                            <Link to = "/productdetails"><ProductCard props = {productCardAttr[0]}/></Link>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr[0]}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr[0]}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr[0]}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr[0]}/>
                        </div>
                        <div className = "product-column">
                            <ProductCard props = {productCardAttr[0]}/>
                        </div>



                    </div>
        </div>
    );
}

export default CardCollectionBody;
