import React,{useEffect, useState} from "react";

import "./QuestionAnswerBody.css";

import QuestionAndAnswer from "../parts/QuestionAndAnswer";
import userLogo from "../asset/user.png";
import { countBy } from "lodash";
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
    const [file,setFile] = useState(null);
    var arr = [];


    useEffect(()=> {
        arr.push(file);
        console.log(arr);
        console.log(arr.length);
    })

    return (
        <div>
            <form onSubmit = {(event)=>event.preventDefault()}>
                <div className = "text-area-container">
                    <textarea rows = "5" id = "question" onChange={e => setCount(e.target.value.length)}/>
                    <p className = "counter">{count}</p>
                </div>
                <label className = "question-file-upload">

                    <input type = "file" id = "image" style = {{"margin-bottom":"5px"}} className = "question-file" onChange = {event=>setFile(URL.createObjectURL(event.target.files[0]))} />
                    <img src = {attachment}></img>
                </label>

                <img src = {file} style = {{"width": "100%"}}></img>
                {console.log(file)}
                <br></br><button className = "question-body-add-btn"><strong>+</strong> Add Question</button>
            </form>

            {questionAndAnswerData["items"].map((item) => (<QuestionAndAnswer props = {item}/>))}
        </div>
    );
}

export default QuestionAndAnswerBody;
