import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://code-adaptive-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='text-center mt-5'>

            <h1 className='title-color fw-bold pb-3'>All Courses</h1>

            <div>
                {
                    categories.map(category => <ListGroup
                        key={category.id}>
                        <ListGroup.Item className='mb-2'><Link to={`/course/${category.id}`} className="text-decoration-none text-dark fs-5">{category.name}</Link></ListGroup.Item>
                    </ListGroup>)
                }
            </div>


        </div >
    );
};

export default LeftSideNav;
