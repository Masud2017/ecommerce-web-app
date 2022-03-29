import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

import "./login.css";
import facebook from "../asset/facebook.png"
import google from "../asset/google.png"
import logo from "../asset/lgoo.svg";

function Login() {
    const [googleConsentUrl, setGoogleConsentUrl] = useState();
    const [facebookConsentUrl, setFacebookConsentUrl] = useState();

    useEffect(async ()=> {
        await fetch("http://localhost:8000/api/auth/google/redirect",{ headers: new Headers({ accept: 'application/json' }) }).then(data => {
            if (data.ok) {
                return data.json();
            }
            throw new Error('Something went wrong!');
        }).then(data=>setGoogleConsentUrl(data.url)).catch(e=>console.log("another error "+e));
        // alert(googleConsentUrl);
    });
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
                    <a href = "#" target="_blank"><img src = {facebook} alt = "Something went wrong" ></img></a>
                    {googleConsentUrl && <a href = {googleConsentUrl} target = "_blank" ><img src = {google} alt = "Something went wrong" ></img></a>}
                </div>
                <a href= "#">Forgot password?</a><br></br>
                <a href= "#">Don't have any account?</a>

            </form>

        </div>
    );
}

export default Login;
