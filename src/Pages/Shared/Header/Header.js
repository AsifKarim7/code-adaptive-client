import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none fw-bold' to='/'>Code Adaptive</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='text-decoration-none' to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none' to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        {user?.photoURL ?
                                            <Image
                                                style={{ height: '40px' }}
                                                roundedCircle src={user?.photoURL}>
                                            </Image>
                                            :
                                            <FaUser className='text-dark'></FaUser>
                                        }
                                        <Button className='ms-2' variant="outline-primary" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Button className='ms-2' variant="outline-primary"><Link className='text-decoration-none' to='/login'>Login</Link></Button>
                                    </>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;