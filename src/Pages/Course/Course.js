import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import { FaEye, FaFilePdf } from 'react-icons/fa';

const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    const { id, img, title, views, details } = course;

    return (
        <Container>
            <Card className='my-4 shadow-sm'>
                <Card.Body ref={ref}>
                    <Card.Title className='pb-3 fs-2 title-color'>{title}  <Pdf targetRef={ref} filename="code-adaptive.pdf">
                        {({ toPdf }) => <FaFilePdf className='fs-2 text-dark ms-2' onClick={toPdf}></FaFilePdf>}
                    </Pdf></Card.Title>
                    <Card.Img variant="top" src={img} style={{ height: '500px' }} />
                    <Card.Text className='pt-3'>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button variant="primary"><Link className='text-decoration-none text-white' to={`/premium/${id}`}>Get Premium Access</Link></Button>
                        <Card.Text>
                            Total Views: {views} <FaEye></FaEye>
                        </Card.Text>
                    </div>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Course;