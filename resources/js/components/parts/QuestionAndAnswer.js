import React from 'react';

import "./QuestionAndAnswer.css";

import recycleBin from "../asset/recyclebin.png";

/**
 *
 * @param {*} props - contains information about question and answer
 * @returns
 */
function QuestionAndAnswer(props) {
    return (
        <div className = "question-parent">
            <img src = {props.props.img} className = "question-user-logo" />
            <h1>{props.props.name}</h1>
            <p className = "question-date">Date: {props.props.date}</p>
            <p className = "question-body">{props.props.body}</p>
            <div className = "question-delete-btn">
                {/* <img src = {recycleBin} className = "question-delete-icon" /> */}
                <h5 className = "question-delete-icon">X</h5>
            </div>
        </div>
    );
}

export default QuestionAndAnswer;
