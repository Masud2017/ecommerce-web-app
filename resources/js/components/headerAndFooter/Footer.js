import React from 'react';
import ReactDOM from 'react-dom';

import "./Footer.css"

function Footer() {
    return (
        <div className = "footer-container">
            <div className = "copyright">Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}></span> from 2022</div>
        </div>
    );
}

export default Footer;
// ReactDOM.render(<Footer />, document.getElementById('footer'));
