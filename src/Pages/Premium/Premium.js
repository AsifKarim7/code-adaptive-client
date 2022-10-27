import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";


const Premium = () => {
    const premiumAccess = useLoaderData();
    const { title, img, price, rating } = premiumAccess;

    return (
        <Container className='d-flex justify-content-center py-5'>
            <Card style={{ width: '50rem' }} className='shadow-sm'>
                <Card.Body>
                    <Card.Title className='fs-2 fw-bold title-color pb-2'>{title}</Card.Title>
                    <Card.Img variant="top" src={img} style={{ height: '350px' }} />

                    <div className='d-flex justify-content-between my-4 fw-semibold '>
                        <span>Price: {price}</span>
                        <span>Rating: {rating} <FaStar></FaStar></span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button className='px-5 text-white' variant='primary'>Enroll</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Premium;