import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";



function Home() {
    return (
        <div className="center">
            <h1>To store personal data</h1>
            <p>Task from KAT</p>

            <Link to='/register'>
            <button>Register with email</button>
            </Link>

            <Link to='/signin'>
            <button>SignIn</button>
            </Link>
        </div>
    )
}

export default Home
