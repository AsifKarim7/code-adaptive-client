import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='text-center text-dark shadow-sm my-3 py-3 rounded-3 bg-white'>
                <h2 className='title-color fw-bold'>What is cors?</h2>
                <Container>
                    <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources..</p>
                </Container>
            </div>
            <div className='text-center text-dark shadow-sm my-3 py-3 rounded-3 bg-white'>
                <h2 className='title-color fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <Container>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br /> The other options except firebase to implement authenticate are - 1.MongoDB, 2.Db2, 3.Appwrite, 4.Oracle Database, 5.Supabase, 6.DataStax Enterprise etc.</p>
                </Container>
            </div>
            <div className='text-center text-dark shadow-sm my-3 py-3 rounded-3 bg-white'>
                <h2 className='title-color fw-bold'>How does the private route work?</h2>
                <Container>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </Container>
            </div>
            <div className='text-center text-dark shadow-sm my-3 py-3 rounded-3 bg-white'>
                <h2 className='title-color fw-bold'>What is Node? How does Node work?</h2>
                <Container>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </Container>
            </div>
        </Container >
    );
};

export default Blog;