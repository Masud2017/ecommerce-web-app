import React,{useContext, useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

import "./login.css";
import facebook from "../asset/facebook.png"
import google from "../asset/google.png"
import logo from "../asset/lgoo.svg";
import axios from 'axios';
import { AppContext } from '../../Context';
import { Link } from 'react-router-dom';




function Login() {
    const [googleConsentUrl, setGoogleConsentUrl] = useState();
    const [facebookConsentUrl, setFacebookConsentUrl] = useState();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const contextApp = useContext(AppContext);
    const [loggedIn,setLoggedIn] = useState(false);


    const login =(event)=> {
        event.preventDefault();

        axios.post("http://localhost:8000/api/auth/login", {
            "email":userName,
            "password":password
        },{withCredentials:false}).then(res=>{
            localStorage.setItem("token",res.data.access_token.token);
            localStorage.setItem("role",res.data.access_token.role);

            window.open("/","_self");

        }).catch(e=>console.log(e));

    }

    const changeUserName = (event)=> {
        setUserName(event.target.value);
    }
    const changePassword = (event)=> {
        setPassword(event.target.value);
    }

    useEffect(async ()=> {
        await fetch("http://localhost:8000/api/auth/google/redirect",{ headers: new Headers({ accept: 'application/json' }) }).then(data => {
            if (data.ok) {
                return data.json();
            }
            throw new Error('Something went wrong!');
        }).then(data=>setGoogleConsentUrl(data.url)).catch(e=>console.log("another error "+e));
        // alert(googleConsentUrl);

        if (localStorage.getItem("token")) {
            contextApp.dispatch({type:'grantAuth'});
        }
    });

    return(
        <div className = "login">
            <form className = "login-form">
            <div className = "login-logo">
                <img src = {logo}  style = {{"width":"90%"}}/>
            </div>

                <input className = "input-controll" type = "text" name = "username" placeholder='Enter your username' onChange={changeUserName}></input><br></br>
                <input className = "input-controll" type = "password" name = "password" placeholder='Enter your password' onChange={changePassword}></input><br></br>
                <input className = "login-btn" type = "submit" value = "Login" onClick={login}></input>
                <div className = "qauth-logo">
                    <a href = "#"><img src = {facebook} alt = "Something went wrong" ></img></a>
                    {googleConsentUrl && <a href = {googleConsentUrl} ><img src = {google} alt = "Something went wrong" ></img></a>}
                </div>
                <a href= "#">Forgot password?</a><br></br>
                <Link to = "/signup">Don't have any account?</Link>

            </form>

        </div>
    );
}

export default Login;
