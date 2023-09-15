import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BeakerIcon, EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import './Login.css'

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

    return (
        <div className='w-50 mx-auto'>
            <Form>
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

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
};

export default Login;