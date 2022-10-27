import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MiddleSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://code-adaptive-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5'>

            <h1 className='title-color fw-bold text-center'>Explore Programming Languages</h1>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 mt-4 d-flex justify-content-center mb-5">
                {
                    categories.map(category =>
                        <Card style={{ width: '18rem', padding: '0px' }} key={category.id} className='shadow-sm'>
                            <Card.Img variant="top" style={{ height: '200px' }} src={category.img} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>{category.name}</Card.Title>
                                <Button variant="outline-primary" className='mt-3'><Link to={`/course/${category.id}`} className="text-decoration-none text-dark">Details</Link></Button>
                            </Card.Body>
                        </Card>

                    )}
            </div>

        </div >
    );
};

export default MiddleSide;