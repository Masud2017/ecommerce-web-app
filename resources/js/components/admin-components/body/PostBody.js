import React from "react";

import "./PostBody.css";

import iconSearch from "../../asset/svg/search.svg";
import CardCollectionBody from "../../body/CardCollectionBody";

const openModal = ()=> {
    document.getElementById("modalopen").classList.add("showmodal");
    // document.getElementById("modalopen").addEventListener("click",()=> {document.getElementById("modalopen").classList.remove("showmodal")})
}
const closeModal = ()=> {
    document.getElementById("modalopen").classList.remove("showmodal");
}

const PostBody = ()=> {
    return(
        <div>
            <div className = "post-modal-container" id = "modalopen">
                    <div className = "post-modal">
                        <h1>Create Post</h1>


                        <div className ="post-modal-body">
                            <form className = "post-modal-form">
                                <label className = "post-modal-form-image">
                                    <input type = "file" id = "image" style = {{"margin-bottom":"5px"}} className = "post-modal-file"  />
                                    <img alt = "something went wrong" src = 'data:image/jpeg;base64,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'/>
                                </label>

                                <input placeholder="enter the name of the member" type  = "text" className ="control"/>
                                <input placeholder="password" type ="password" className ="control"/>

                                <input placeholder="enter the member email" type = "email" className = "control" required="required"/>

                                <input type = "submit" value = "Create Member" className = "control post-modal-btn" style = {{"border":"none"}} />
                                Or,
                                <input type = "text" placeholder="enter the reciptionist email" className = "control" />
                                <input type = "submit" value = "Create Send auth link to user" className = "control post-modal-btn" style = {{"border":"none"}}/>


                            </form>

                        </div>

                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            <div className = "post-body-heading">
                Post
            </div>
            <div className = "post-body-button">
                <button className = "member-button" onClick= {openModal}>Create Post</button>

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
