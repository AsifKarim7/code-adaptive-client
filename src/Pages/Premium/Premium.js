import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaEye, FaStar } from "react-icons/fa";


const Premium = () => {
    const premiumAccess = useLoaderData();
    const { title, img, price, views, rating } = premiumAccess;

    return (
        <Container className='d-flex justify-content-center'>
            <Card style={{ width: '50rem' }}>
                <Card.Header>Premium</Card.Header>
                <Card.Body>
                    <Card.Title className='fs-2'>{title}</Card.Title>
                    <Card.Img variant="top" src={img} style={{ height: '250px' }} />

                    <div className='d-flex justify-content-between my-4 fw-semibold'>
                        <span>Price: {price}</span>
                        <span>Rating: {rating} <FaStar></FaStar></span>
                        <span>Total Views: {views} <FaEye></FaEye></span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button variant='outline-info'>Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Premium;