import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Register() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/getdata')
                }
            })
            .catch(error => alert(error.message))
            alert("Registration Successful");

    }

    return (
        <div className='login'>
            <Link to='/'>
                <h3>to home</h3>
            </Link>
            <div className='login__container'>
                <h1>Register</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                </form>

                <button onClick={register} className='login__registerButton'>Click to register</button>

            </div>
        </div>
    )
}

export default Register
