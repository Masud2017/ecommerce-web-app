import React from 'react';
import ReactDOM from 'react-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Container, Row, Col } from 'react-grid-system';

import ProductCard from '../parts/ProductCard';
import "./RegularBody.css";


function RegularBody() {

    const productCardAttr = {
        img:"https://www.verywellfit.com/thmb/ewjRLDcjXY4FmMdrWDuOV9XtT6g=/1072x1072/smart/filters:no_upscale()/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
        name : "Dark Chocolate",
        price : "1700 BDT",
        discount : "20"

    };


    return(
        <div>
            <div className = "cata-cor-row">
                <div>
                    <ul className = "product-catagory">
                        <li className =  "cata-item mt-sm-4">Electronics accessories</li>
                        <li className =  "cata-item">Electronics accessories</li>
                        <li className =  "cata-item">Electronics accessories</li>
                        <li className =  "cata-item">Electronics accessories</li>

                    </ul>
                </div>

                <div>
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://icms-image.slatic.net/images/ims-web/c5b1210f-cd7e-458e-8284-a6057a24399d.jpg_1200x1200.jpg" alt="Los Angeles" width="1100" height="500"/>
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://icms-image.slatic.net/images/ims-web/03ac0124-7b85-45cb-897a-088a6458ec90.jpg" alt="Chicago" width="1100" height="500"/>
                        <div class="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://icms-image.slatic.net/images/ims-web/9fa70f05-b33a-4bba-827e-f6c628aa92bd.jpg" alt="New York" width="1100" height="500"/>
                        <div class="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                    </div>

                    <div className = "product-row">
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>

                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>
                        <ProductCard props = {productCardAttr}/>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default RegularBody;
ReactDOM.render(<RegularBody />, document.getElementById('regularbody'));

