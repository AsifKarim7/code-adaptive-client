import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Pdf from "react-to-pdf";
import { FaFilePdf } from 'react-icons/fa';

const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    const { id, img, title, details } = course;

    return (
        <Container>
            <Card className='my-4'>

                <CardHeader className='fs-4 fw-semibold text-center text-dark bg-light'>
                    More About This Course
                    <Pdf targetRef={ref} filename="code-adaptive.pdf">
                        {({ toPdf }) => <FaFilePdf className='fs-2 text-dark ms-2' onClick={toPdf}></FaFilePdf>}
                    </Pdf>
                </CardHeader>


                <Card.Body ref={ref}>
                    <Card.Title className='pb-3 fs-2'>{title}</Card.Title>
                    <Card.Img variant="top" src={img} style={{ height: '600px' }} />
                    <Card.Text className='pt-3'>
                        {details}
                    </Card.Text>

                    <Button variant="outline-info"><Link className='text-decoration-none text-dark' to={`/premium/${id}`}>Get Premium Access</Link></Button>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Course;