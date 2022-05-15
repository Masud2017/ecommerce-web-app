import React,{useContext, useEffect} from "react";

import "./Modal.css";

import { AppContext } from "../../../Context";

const Modal = (props)=> {
    var appContext = useContext(AppContext);

    // useEffect(()=>{
    //     if (appContext.state.isOpenModel) {
    //         document.getElementById("modal").style.display = "inline-block";

    //         window.addEventListener("click",()=> {
    //             document.getElementById("modal").style.display = "none";
    //             appContext.dispatch({type:'modal'});

    //         })
    //     }
    // });

    window.addEventListener("click",()=> {
        appContext.dispatch({type:'modal'});
    })

    var stl = {
        "display":(appContext.state.isOpenModal)? "inline-block":"none"
    };
    return (
        <div className = "modal-container" style = {stl} id = "modal">
            <div className = "modal-box">
                <form>
                    Name : <input type = "text" placeholder="enter the name"/>
                </form>
            </div>
        </div>
    );
}

export default Modal;
