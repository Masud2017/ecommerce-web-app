import React,{useState} from "react";

import "./QuestionAnswerBody.css";

import QuestionAndAnswer from "../parts/QuestionAndAnswer";
import userLogo from "../asset/user.png";
import { countBy } from "lodash";

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
    console.log(questionAndAnswerData["items"]);
    const [count,setCount] = useState(0);

    return (
        <div>
            <form onSubmit = {(event)=>event.preventDefault()}>
                <div className = "text-area-container">
                    <textarea rows = "5" id = "question" onChange={e => setCount(e.target.value.length)}/>
                    <p className = "counter">{count}</p>
                </div>
                <input type = "file" id = "image"/>
                <br></br><button className = "question-body-add-btn"><strong>+</strong> Add Question</button>
            </form>

            {questionAndAnswerData["items"].map((item) => (<QuestionAndAnswer props = {item}/>))}
        </div>
    );
}

export default QuestionAndAnswerBody;
