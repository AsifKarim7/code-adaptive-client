import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { Container } from 'react-bootstrap';


const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    return (

        <Container className='bg-white mt-5 pb-4 rounded-3 shadow-lg'>
            <h3 className='title-color text-center py-4 fw-bolder fs-2'>User Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter Password" required />

                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='my-3'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIn} className='ms-3' variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </div>
            <p>New to this website? Please <Link className='text-decoration-none' to='/register'>Register</Link></p>
        </Container>
    );
};

export default Login;