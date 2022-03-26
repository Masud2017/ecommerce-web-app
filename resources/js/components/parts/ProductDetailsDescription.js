import React from 'react';


import "./product-details-description.css";

/**
 *
 * @param {*} props - contains the neccessary information to show in the page. specially product specification
 * @returns
 */
function ProductDetailsDescription(props) {
    return (
        <div className = "desc-parent">
            <h2>Description:</h2>
            <p>{props.props.description}</p>
            <h4>Specification</h4>
            <ul type = "circle">
                {props.props.specList.map((item)=>(<li>{item}</li>))}
            </ul>
        </div>
    );
}

export default ProductDetailsDescription;


//Todo :
/*
 There would be two section in this component :
    1. Descriptoin
    2. Specification
*/
