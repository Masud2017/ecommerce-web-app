import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import "../headerAndFooter/Header.css"



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from "../asset/lgoo.svg";
import cart from "../asset/cart.svg";

import RegularBody from "../body/RegularBody";
import Login from "../parts/Login";
import Signup from "../parts/Login";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { set } from 'lodash';
import { Component } from 'react';
import CartPage from '../body/CartPage';
import AccountBody from './AccountBody';

import ChatBox from '../parts/ChatBox';


import "./AuthenticatedHeader.css";
// Testing the api

import Footer from "../headerAndFooter/Footer";



import {AppContext} from "../../Context";

function logoutHandler() {
    const contextApp = useContext(AppContext);
    alert("Logout");

    sessionStorage.removeItem("token");
    if (!sessionStorage.getItem("token")) {
        contextApp.dispatch({type:'logout'});
    }
}

function AuthenticatedHeader () {


        return (
            <div name = "Header">
                <ChatBox/>
                <Router>
                <ul className ="nav">
                    <Link to = "/"><img alt = "Something went wrong" src = {logo} style = {{"width":"30px"}} className = "nav-item" id = "logo"></img></Link>
                    <div className = "nav-item" id = "search-bar">
                        <form className = "nav-item search-bar" id ="search-bar">
                            <input type = "text" className = "search-bar" placeholder='Search your product'></input>
                            {/* <input className = "nav-item" type = "submit" value = "Search"></input> */}
                        </form>
                    </div>
                    <div id = "login" className = "nav-item">
                        <Link to = "/cart"><img src = {cart} className = "header-cart" ></img></Link>
                        <p className = "cart-counter">1</p>
                        <li className = "nav-item drop-down">
                            <img className = "profile-pic" src=  "https://avatars.githubusercontent.com/u/33942219?v=4" alt = "somthing went wrong"/>
                            <div class = "profile-option">
                                <Link to = "account">Manage Account</Link>
                                <hr style = {{"margin":"0px"}}></hr>
                                <a href= "#" onClick={()=>logoutHandler}>Logout</a>

                            </div>
                        </li>
                    </div>
                </ul>

                <Switch>
                    {/* <Route exact path = '/'>
                        <RegularBody/>
                    </Route> */}
                    <Route path = "/login">
                        <Login/>
                    </Route>
                    <Route path = "/signup">
                        <Signup/>
                    </Route>
                    <Route path = "/cart"><CartPage/></Route>
                    <Route path = "/account"><AccountBody/></Route>

                    <Route path = "/" component={RegularBody}/>


                </Switch>
                </Router>

                <Footer/>
            </div>




        );

}

export default AuthenticatedHeader;


