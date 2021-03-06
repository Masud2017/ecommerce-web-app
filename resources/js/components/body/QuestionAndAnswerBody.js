import React,{createElement, useEffect, useState} from "react";

import "./QuestionAnswerBody.css";

import QuestionAndAnswer from "../parts/QuestionAndAnswer";
import userLogo from "../asset/user.png";
import { countBy, template } from "lodash";
import attachment from "../asset/attachment.png";

function QuestionAndAnswerBody() {

    const questionAndAnswerData = {
            "items":[
                {
                    "img":userLogo,
                    "name":"User bodohla",
                    "date":"12/02/2022",
                    "body":"This is question body.This is question body.This is question body.This is question body.This is question body.This is question body."
                },
                {
                    "img":userLogo,
                    "name":"User bodohla2",
                    "date":"12/02/2021",
                    "body":"This is question body22."
                },
            ]
    };
    const [count,setCount] = useState(0);
    var arr = [];


    /**
     * Cleans all the child element from the div
     */
    const cleanUpImgStack = ()=> {
        const destination = document.getElementById("img-stack");
        destination.innerHTML = "";
    }

    /**
     * Adds any new image to the img-stack
     * @param {*} img - new image to be added
     */
    const addNewImageToStack = (img)=> {
        const destination = document.getElementById("img-stack");
        const imgElement = document.createElement("img");

        imgElement.className = "img-stack"
        imgElement.setAttribute("src",URL.createObjectURL(img));

        imgElement.addEventListener("click",()=> {
            // imgElement.style.cssText = "display:none";
            imgElement.remove();
        })

        destination.appendChild(imgElement);
    }

    /**
     *
     * @param {*} event - event while upload a new image or file
     */
    const changeTest = (event)=> {
        var data = URL.createObjectURL(event.target.files[0]);
        var name = event.target.name;
        arr.push(data);
        console.log(arr);

        addNewImageToStack(event.target.files[0]);
    }



    return (
        <div>
            <form onSubmit = {(event)=>event.preventDefault()}>
                <div className = "text-area-container">
                    <textarea rows = "5" id = "question" onChange={e => setCount(e.target.value.length)}/>
                    <p className = "counter">{count}</p>
                </div>
                <label className = "question-file-upload">

                    {/* <input type = "file" id = "image" style = {{"margin-bottom":"5px"}} className = "question-file" onChange = {event=>setFile(URL.createObjectURL(event.target.files[0]))} /> */}
                    <input type = "file" id = "image" style = {{"margin-bottom":"5px"}} className = "question-file" onChange = {()=>changeTest(event)} />

                    <img src = {attachment}></img>
                </label>
                <div name = "img-stack" id = "img-stack"></div>

                <br></br><button onClick={()=>cleanUpImgStack()} className = "question-body-add-btn"><strong>+</strong> Add Question</button>
            </form>

            {questionAndAnswerData["items"].map((item) => (<QuestionAndAnswer props = {item}/>))}
        </div>
    );
}

export default QuestionAndAnswerBody;
