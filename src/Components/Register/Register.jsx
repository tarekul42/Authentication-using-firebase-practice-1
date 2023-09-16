import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config'

const Register = () => {

    const auth = getAuth(app);

    const [showPassword, setShowPassword] = useState(false);
    const [hidePassword, sethidePassword] = useState(true);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleShowPassword = () =>{
        setShowPassword(true)
        sethidePassword(false)
    }
    const handleHidePassword = () =>{
        setShowPassword(false)
        sethidePassword(true)
    }

    const handleRegisterForm = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        // password validation
        setError('')
        if(password.length < 8){
            setError('Your Password should at least 8 character.');
            return;
        }
        else if(!/(?=.*[a-zA-Z])/.test(password)){
            setError('Your Password should contain at least 1 alphabetic character.');
            return;
        }
        else if(!/(?=.*[@^*!#\$%&\?].*)/.test(password)){
            setError('Your password should contain at least 1 special characters.');
            return;
        }
        else if(!/(?=.*[1-9])/){
            setError('Your password should contain at least 1 digit.');
            return;
        }
        else{
            setSuccess('Your registration is successfull.')
            setError('')
        }

        // create new user
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            event.target.reset();
            setSuccess('Your registration in successful');
            setError('')

        })
        .catch(error =>{
            setError(error.message);
            setSuccess('')
        })

    }


    return (
        <div className='w-50 mx-auto'>
            <h4 className='text-primary text-center mt-5'>Register</h4>
            <Form onSubmit={handleRegisterForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id='email' type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <p id='password'>
                <Form.Control type={showPassword ? "text" : "password"} name='password' placeholder="Password" required/>
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

            <p>Don't have any account? Please <Link to='/login'>Login</Link></p>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
                <p className='text-info'>{success}</p>
        </div>
    );
};

export default Register;