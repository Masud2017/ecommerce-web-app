import React from 'react';

import "./QuestionAndAnswer.css";

/**
 *
 * @param {*} props - contains information about question and answer
 * @returns
 */
function QuestionAndAnswer(props) {
    return (
        <div className = "question-parent">
            <img src = {props.props.img} className = "question-user-logo" />
            <h1>Name</h1>
            <p className = "question-date">Date: 12/02/2021</p>
            <p className = "question-body">Questoin Body</p>
        </div>
    );
}

export default QuestionAndAnswer;
