import React from 'react';
import { Link } from "react-router-dom";
import './ShowData.css';


function ShowData() {
    return (
        <div className="info">

            <h1>You have successfully logged in</h1>

            <Link to='/'>
                <h3>Go to home</h3>
            </Link>

        </div>
    )
}

export default ShowData
