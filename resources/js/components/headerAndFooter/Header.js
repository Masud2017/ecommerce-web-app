import React from 'react';
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



function Header() {

    return (
        <div name = "Header">

            <ul className ="nav">
                <img alt = "Something went wrong" src = {logo} style = {{"width":"30px"}} className = "nav-item" id = "logo"></img>
                <div className = "nav-item" id = "search-bar">
                    <form className = "nav-item search-bar" id ="search-bar">
                        <input type = "text" className = "search-bar" placeholder='Search your product'></input>
                        {/* <input className = "nav-item" type = "submit" value = "Search"></input> */}
                    </form>
                </div>
                <div id = "login" className = "nav-item">
                    <img src = {cart} className = "header-cart" ></img>
                    <p className = "cart-counter">1</p>
                    <li  className = "nav-item" >Login</li>
                    /
                    <li  className = "nav-item">Home</li>
                </div>
            </ul>


        </div>
    //     <div>
    //         <Box sx={{ flexGrow: 1 }} >
    //   <AppBar position="static" style = {{"background-color":"grey","margin-bottom":"4px"}}>
    //     <Toolbar>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Logo is here
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //       <Button color="inherit">Signup</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    //     </div>




    );
}

export default Header;

ReactDOM.render(<Header />, document.getElementById('header'));

