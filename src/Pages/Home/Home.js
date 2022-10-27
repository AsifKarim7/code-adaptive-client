import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='home-bg d-flex justify-content-center'>

            <div className='text-center home-discription'>
                <h1 className='text-white'>Programming isn't about what you know,</h1>
                <h2 className='text-white'>it's about what you can figure out.</h2>
                <Button className='mt-3' variant="primary"><Link className='text-decoration-none text-white' to='/courses'>Get Started</Link></Button>
            </div>

        </div>
    );
};

export default Home;