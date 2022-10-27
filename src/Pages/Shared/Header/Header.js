import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [state, setState] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleToggle = () => {
        setState(!state);
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='bg-nav'>
            <Container>
                <Navbar.Brand>
                    <Image style={{ height: '50px' }} roundedCircle src='https://images.vexels.com/media/users/3/224241/isolated/preview/4d2aacf413b02b74c2cdb75ea41f24d3-programming-diple-logo.png' ></Image>
                    <Link className='text-decoration-none fw-bold title-color ms-2' to='/'>Code Adaptive</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-auto">
                        <Button className='me-2' variant="outline-primary"><Link className='text-decoration-none text-white' to='/'>Home</Link></Button>
                        <Button className='me-2' variant="outline-primary"><Link className='text-decoration-none text-white' to='/courses'>Courses</Link></Button>
                        <Button className='me-2' variant="outline-primary"><Link className='text-decoration-none text-white' to='/faq'>FAQ</Link></Button>
                        <Button className='me-2' variant="outline-primary"><Link className='text-decoration-none text-white' to='/blog'>Blog</Link></Button>
                    </Nav>

                    <Button onClick={handleToggle} variant={state ? 'dark' : 'light'}>
                        {state ? <FaMoon></FaMoon> : <FaSun></FaSun>}
                    </Button>

                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        {user?.photoURL ?
                                            < Image
                                                className='ms-2'
                                                style={{ height: '40px' }}
                                                roundedCircle src={user?.photoURL} title={user.displayName}>
                                            </Image>
                                            :
                                            <FaUser className='text-dark'></FaUser>
                                        }
                                        <Button className='ms-2 text-white' variant="outline-primary" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Button className='ms-2' variant="outline-primary"><Link className='text-decoration-none text-white' to='/login'>Login</Link></Button>
                                    </>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;