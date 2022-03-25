import React from "react";

import QuestionAndAnswer from "../parts/QuestionAndAnswer";
import userLogo from "../asset/user.png";

function QuestionAndAnswerBody() {

    const questionAndAnswerData = {
            "items":[
                {
                    "img":userLogo,
                    "name":"User bodohla",
                    "date":"12/02/2022",
                    "body":"This is question body."
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

    return (
        <div>
            {questionAndAnswerData["items"].map((item) => (<QuestionAndAnswer props = {item}/>))}
            Data
        </div>
    );
}

export default QuestionAndAnswerBody;
