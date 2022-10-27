import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;



        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                setError('');
                navigate(from, { replace: true });;
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <Container className='bg-white mt-5 pb-4 rounded-3 shadow-lg'>
            <h3 className='title-color text-center py-4 fw-bolder fs-2'>User Register</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form.Group>

                <Button className='mb-3' variant="primary" type="submit">
                    Register
                </Button>

                <p>Already have an account? Please <Link className='text-decoration-none' to='/login'>Log in</Link></p>
            </Form>

        </Container>



    );
};

export default Registration;