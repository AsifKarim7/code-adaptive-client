import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MiddleSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4 className='fs-1 text-center'>Explore Programming Languages</h4>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 mt-5">
                {
                    categories.map(category =>
                        <Card style={{ width: '18rem' }} key={category.id}>
                            <Card.Img variant="top" style={{ height: '225px' }} src={category.img} />
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                                <Card.Text>Price: {category.price}</Card.Text>
                                <Button variant="outline-primary"><Link to={`/course/${category.id}`} className="text-decoration-none text-dark">Details</Link></Button>
                            </Card.Body>
                        </Card>

                    )}
            </div>

        </div >
    );
};

export default MiddleSide;