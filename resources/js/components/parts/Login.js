import React from 'react';
import ReactDOM from 'react-dom';

import "./login.css";
import facebook from "../asset/facebook.png"
import google from "../asset/google.png"
import logo from "../asset/lgoo.svg";

function Login() {
    return(
        <div className = "login">
            <form className = "login-form">
            <div className = "login-logo">
                <img src = {logo}  style = {{"width":"90%"}}/>
            </div>

                <input className = "input-controll" type = "text" name = "username" placeholder='Enter your username'></input><br></br>
                <input className = "input-controll" type = "password" name = "password" placeholder='Enter your password'></input><br></br>
                <input className = "login-btn" type = "submit" value = "Login"></input>
                <div className = "qauth-logo">
                    <a href = "#"><img src = {facebook} alt = "Something went wrong" ></img></a>
                    <a href = "#"><img src = {google} alt = "Something went wrong" ></img></a>
                </div>
                <a href= "#">Forgot password?</a><br></br>
                <a href= "#">Don't have any account?</a>

            </form>

        </div>
    );
}

export default Login;
