import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [hidePassword, sethidePassword] = useState(true)

    const handleShowPassword = (event) =>{
        setShowPassword(true)
        sethidePassword(false)
    }
    const handleHidePassword = (event) =>{
        setShowPassword(false)
        sethidePassword(true)
    }

    const handleLoginForm = event =>{
        event.preventDefault()
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
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <p>Don't have any account? Please <Link to='/register'>Register</Link></p>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
};

export default Login;