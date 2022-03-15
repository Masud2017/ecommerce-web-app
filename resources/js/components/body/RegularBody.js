import React from 'react';
import ReactDOM from 'react-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Container, Row, Col } from 'react-grid-system';


import "./RegularBody.css";
import CardCollectionBody from "./CardCollectionBody";


function RegularBody() {




    return(
        <div>
            <CardCollectionBody/>

        </div>
    );
}

export default RegularBody;
ReactDOM.render(<RegularBody />, document.getElementById('regularbody'));

