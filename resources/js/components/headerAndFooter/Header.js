import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./Header.css"



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
import NonAuthenticatedHeader from '../body/NonAuthenticatedHeader';
import AuthenticatedHeader from '../body/AuthenticatedHeader';
import AuthOrNotHeader from './AuthOrNotHeader';


// Testing the api

function Header() {

    var token = sessionStorage.getItem("token");

    return <AuthOrNotHeader token = {token}/>
}

export default Header;

ReactDOM.render(<Header />, document.getElementById('header'));

