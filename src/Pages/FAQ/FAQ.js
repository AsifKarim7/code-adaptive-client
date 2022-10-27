import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0" className='container my-5'>
            <h1 className='text-center title-color fw-bold pb-3'>Frequently Asked Questieons</h1>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What are the technology requirements to take an code adaptive courses?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    You will need a computer, a high speed Internet connection, a newer version of a web browser, and access to common tools and software like vscode, notepad++, codePen etc.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What are the admission requirements for these courses?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    None. Here at code adaptive, we try to educate the people who wants to start from the beginning.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Can I find out more about these courses?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    The courses are detailed in the courses section. For further information, please contact our online team.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>How long do I have to complete a course?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    You can complete our courses within 3 months to 6 months. Our courses are very time friendly.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>How do I contact my course instructor?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    Your instructor will explain the best way to reach him or her within the course home pages. You may communicate with your instructor through discussion groups, bulletin boards, chat rooms, assignment submissions, through email.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header> How much do courses cost?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    Our courses cost starting from only 7$ to 20$.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>How long is a live online lesson?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    Every week we'll have one live session. It will be 45 mins long.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>Can I use a smartphone for live online lessons?</Accordion.Header>
                <Accordion.Body className='bg-light shadow-sm'>
                    Yes, you can use a smartphone to join a live online lesson. However, the lesson experience is best when you use a desktop computer or laptop and use your smartphone to access other quizzes and activities during the lesson.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FAQ;