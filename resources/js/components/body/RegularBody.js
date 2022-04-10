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



function RegularBody(props) {
    const contextApp = useContext(AppContext);

    useEffect(async ()=> {
        await fetch(`http://localhost:8000/api/auth/google/callback${props.location.search}`).then(data=> {
            if (data.ok) {
                return data.json();
            }
            throw new Error ("something went wrong");
        }).then(res=>{
            alert(res.access_token);
            sessionStorage.setItem("token",res.access_token);


        }).catch(e=>console.log("This is catch "+e));
        if (sessionStorage.getItem('token')) {
            contextApp.dispatch({type:'grantAuth'});
        } else {
            contextApp.dispatch({type:'logout'});
        }
    },[]);


    return(
        <div>
            {/* <AccountBody/> */}
            {/* <ProductDetailsPage/> */}
            <CardCollectionBody/>
            <LoadingScreen/>
        </div>

    );
}

export default RegularBody;

