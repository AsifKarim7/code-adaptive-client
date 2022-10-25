import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import MiddleSide from '../Shared/MiddleSide/MiddleSide';


const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="3">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="9">
                    <MiddleSide></MiddleSide>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;