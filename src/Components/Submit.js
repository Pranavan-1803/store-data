import React from 'react'
import './ShowData.css';
import { Link } from "react-router-dom";



function Submit() {
    return (
        <div className="info">
            <h1>Submitted Successfully</h1>

        <Link to='/'>
            <h3>Go to home</h3>
        </Link>
        </div>
    )
}

export default Submit
