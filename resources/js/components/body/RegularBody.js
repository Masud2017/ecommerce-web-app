import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Container, Row, Col } from 'react-grid-system';


import CartPage from "./CartPage";
import ProductDetailsPage from './ProductDetailsPage';

import "./RegularBody.css";
import CardCollectionBody from "./CardCollectionBody";
import AccountBody from './AccountBody';

import {AppContext} from "../../Context";

import LoadingScreen from '../parts/LoadingScreen';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import ProceedToCheckoutPage from "./ProceedToCheckoutPage";


import AdminRegularBody from '../admin-components/body/AdminRegularBody';
import MainMenssangerBody from '../admin-components/Messanger/MainMessangerBody';


const getJwtMiddleInfo = (jwtToken)=> {
    return atob(jwtToken.split(".")[1]);
}

const isJwtValid = (jwt)=> {
    const payload = getJwtMiddleInfo(jwt);

    const now = new Date();
    const fiveMin = 1000 * 60 * 5;
    const expiration = new Date(payload.exp);

    if (expiration.getTime() - now.getTime() < fiveMin) {
        return true; // expired
    } else {
        return false; // not expired
    }

    return false; // not expired
}

function RegularBody(props) {
    const contextApp = useContext(AppContext);

    useEffect(async ()=> {
        await fetch(`http://localhost:8000/api/auth/google/callback${props.location.search}`).then(data=> {
            if (data.ok) {
                return data.json();
            }
            throw new Error ("something went wrong");
        }).then(res=>{
            // alert(res.access_token);
            console.log(res);

            console.log("Debuggng the value of expiry : "+isJwtValid(res.access_token.token));
            if(!isJwtValid(res.access_token.token)) {
                localStorage.setItem("token",res.access_token.token);
                localStorage.setItem("role",res.access_token.role);

            } else {
                localStorage.removeItem("token");
            }



        }).catch(e=>console.log("This is catch "+e));
        if (localStorage.getItem('token')) {
            contextApp.dispatch({type:'grantAuth'});
        } else {
            contextApp.dispatch({type:'logout'});
        }
    },[]);


    return(
        <div>
             <div className = "cata-and-caro">
             <div>
                 <ul type = "circle" className = "cata-list">
                     <li>Computer accessories <span className = "cata-product-count">10</span></li>
                     <li>Gaming stuff <span className = "cata-product-count">1</span> </li>
                     <li>Gents stuff <span className = "cata-product-count">11</span> </li>
                     <li>Groscories <span className = "cata-product-count">4</span> </li>
                     <li>Vege <span className = "cata-product-count">50</span> </li>
                     <li>Gift card <span className = "cata-product-count">30</span> </li>

                 </ul>
             </div>



                <Carousel autoPlay= {true} infiniteLoop={true} interval={4000} showThumbs = {false}>
                    <div style = {{"height":"100%","width":"100%"}}>
                        <img src="https://gcp-img.slatic.net/lazada/63eb1851-5523-4bf8-ac1d-90c55caeb03e_BD-1920-300.jpg"  style = {{height : "100%"}}/>
                    </div>
                    <div>
                        <img src="https://icms-image.slatic.net/images/ims-web/47936a6d-425f-4a91-a8b3-ff3e5bdf54ff.jpg" />
                    </div>
                    <div>
                        <img src="https://icms-image.slatic.net/images/ims-web/9f071684-2f65-4df2-bb93-d24878835e04.jpg" />
                    </div>
                </Carousel>

             </div>

            <CardCollectionBody/>
            <CardCollectionBody/>
            <CardCollectionBody/>
            <CardCollectionBody/>
            <CardCollectionBody/>
        </div>

    );
}

export default RegularBody;

