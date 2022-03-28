import React from "react";

import "./ManageAccount.css";

function ManageAccount(props) {
    return (
        <div>
            <h1>Manage My Account</h1>
                <div  className = "MyAccount-grid">
                <div className = "address-box">
                    <h5>Personal profile</h5><a>Edit</a>
                    <p>User name<br></br>
                    msmasud578@gmail.com
                    </p>

                </div>
                <div className = "address-box with-inner-grid">
                    <div>
                        <h5>Address book</h5>
                        <p>Default billing address</p>
                        <p>433 kollyanpur south paik para mirpur 1 dhaka -1216</p>
                        <p>(+880)-1816783115</p>
                    </div>
                    <div className = "vertical-line"></div>
                    <div style = {{"align-self":"center"}}>
                        <p>Default billing address</p>
                        <p>433 kollyanpur south paik para mirpur 1 dhaka -1216</p>
                        <p>(+880)-1816783115</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ManageAccount;
