import React,{useEffect, useState,useContext} from "react";

import "./Members.css";

import MemberListPart from "../parts/MemberListPart";

import iconClose from "../../asset/svg/cancel.svg";

import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import Modal from "../parts/Modal";

import { AppContext } from "../../../Context";

const mber =()=> {
        document.getElementById("mber-info").style.display = "inline-block";

}

const close_mber =()=> {
    document.getElementById("mber-info").style.display = "none";
}

const add_member_modal = ()=> {
    document.getElementById("modal").style.display = "inline-block";
}

const Members = ()=> {
    var appContext = useContext(AppContext);
    window.onstorage = () => {
        // When local storage changes, dump the list to
        // the console.
        console.log(JSON.parse(window.localStorage.getItem('token')));
      };

    return (
        <div className = "members-body">

        <Modal />


            <div className = "members-heading">Members</div>
            <div className = "button-center">
                <button className = "member-button" onClick = {()=>appContext.dispatch({type:'modal'})}>Add New Member</button>
            </div>

            <div className = "member-list">
                <p>Member list</p>
                <a onClick = {()=>mber()}><MemberListPart/></a>
            </div>

            <div className = "member-info" id = "mber-info">
                <div className = "member-info-heading">
                    <p>Member info</p>
                    <img src = {iconClose} className = "close-member-button" onClick = {close_mber}/>
                </div>

                <div className = "member-info-button-group">
                    <div className = "member-info-body">
                        <div className = "member-info-image-group">
                            <img src = "https://yt3.ggpht.com/ytc/AKedOLQPPlIgfH6M5b4ptOkqAXu0oSLFuxy8fLLmcKEK=s800-c-k-c0x00ffffff-no-rj" name = "profile" className = "member-info-profile-image"></img>
                            <div className = "member-info-name">
                                <h4>Md Masud karim</h4>
                                <p style = {{lineHeight:"5px"}}>Admin</p>
                            </div>
                        </div>
                    </div>
                    <button className = "member-info-ban-btn"><img src = {iconClose} className = "member-info-btn-size" />Ban</button>

                </div>
                <div className = "demote-promote-button-group">
                    <button className = "member-info-promote-btn">Promote</button>
                    <button className = "member-info-demote-btn">Demote</button>

                </div>

                <div className = "member-info-desc">
                <p>Email : msmasud578@gmail.com</p>
                <p>Phone: 01721600967</p>
                <p>Address : 433 kollyanpur south paik para</p>
                <p>District : Dhaka</p>
                <p>City : Mirpur</p>
                <p>Postal code : 1216</p>
                <p>Joined: 17th march 2022</p>
                <div className = "member-info-desc-edit">Edit</div>
                </div>

            </div>
        </div>
    );
}

export default Members;
