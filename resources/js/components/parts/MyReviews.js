import React from "react";

import "./MyReviews.css";


function MyReviews() {
    return (
        <div>
            <h1>My Reviews</h1>
            <div className = "review-tab">
                <div id = "tab-btn" className = "tab-item-btn"><span className = "tab-item">To Be Reviewed</span></div>
                <div id = "tab-btn2" className = "tab-item-btn"><span className = "tab-item">History</span></div>
            </div>
        </div>
    );
}

export default MyReviews;
