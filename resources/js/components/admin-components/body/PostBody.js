import React from "react";

import "./PostBody.css";

import iconSearch from "../../asset/svg/search.svg";
import CardCollectionBody from "../../body/CardCollectionBody";

const PostBody = ()=> {
    return(
        <div>
            <div className = "post-body-heading">
                Post
            </div>
            <div className = "post-body-button">
                <button className = "member-button">Create Post</button>
            </div>
            <form className = "input-container">
                <input type= "text" className = "post-body-inp" placeholder=""/>
                <img className = "icon" src= {iconSearch}></img>
            </form>

            <CardCollectionBody/>
            <CardCollectionBody/>
            <CardCollectionBody/>
            <CardCollectionBody/>

        </div>
    )
}

export default PostBody;
