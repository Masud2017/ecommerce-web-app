import React from "react";

import "./MyReviews.css";

function MyReviews() {

    return (
        <div>
            <h1>My Reviews</h1>
            <div className = "review-tab">
                <div className = "tab-item-btn"><span id = "tab-btn" className = "tab-item">To Be Reviewed</span></div>
                <div className = "tab-item-btn"><span id = "tab-btn2" className = "tab-no">History</span></div>
            </div>
        </div>
    );
}

export default MyReviews;
