import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import './Login.css'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import './Login.css'

const auth = getAuth(app);


const Login = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [hidePassword, sethidePassword] = useState(true);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleShowPassword = (event) =>{
        setShowPassword(true)
        sethidePassword(false)
    }
    const handleHidePassword = (event) =>{
        setShowPassword(false)
        sethidePassword(true)
    }

    const handleLoginForm = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);   

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const loggedUser = userCredential.user;
            setSuccess("User Login successful");
            setError('')
            event.target.reset();
            console.log(loggedUser);

        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess('')
            console.log(errorMessage);
        });
    }

    return (
        <div className='w-50 mx-auto'>
            <h4 className='text-primary text-center mt-5'>Login</h4>
            <Form onSubmit={handleLoginForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id='email' type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <p id='password'>
                <Form.Control type={showPassword ? "text" : "password"} name='password' placeholder="Password" />
                <span id='eyeSlashIcon'>
                {
                   hidePassword && !showPassword ?
                   <span onClick={handleShowPassword}><EyeSlashIcon /></span>
                   :
                   <span onClick={handleHidePassword}><EyeIcon/></span>
                }
                </span>
                </p>
                <p className='text-danger'>{error}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <p>Don't have any account? Please <Link to='/register'>Register</Link></p>
            <p className='text-success'>{success}</p>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
};

export default Login;