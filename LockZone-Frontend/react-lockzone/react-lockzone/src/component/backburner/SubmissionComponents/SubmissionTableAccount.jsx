import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import { Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';

export const SubmissionTableAccount = () => {
    
    const userNameRef = useRef();
    const userPasswordRef = useRef();
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const navigateToUpdate = () =>{
        navigate('/home');
    }

    const handleSubmit = async (event) => {
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        // try {
        //     event.preventDefault();
        //     await axios.put('http://localhost:8080/', 
        //         {}
        //     );
        //     Ref.current.value='';
        // } catch (error) {
        //     console.log(error);
        // }finally(navigateToUpdate()) 
        navigateToUpdate();
    }

    return(
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                        <Form.Label>Enter a New Username or Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type='text' placeholder='Example123 / Example@email.com' name='accname' ref={userNameRef} required/>
                                <Form.Control.Feedback type='invalid'>Please choose a website.</Form.Control.Feedback>
                            </InputGroup>
                        <Form.Label>Enter a New Password</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type='text' placeholder='aBc123$%^DeF' name='accpassword' ref={userPasswordRef} required/>
                                <Form.Control.Feedback type='invalid'>Please choose a website.</Form.Control.Feedback>
                            </InputGroup>
                    </Form.Group>
                </Row>
                <Button type="submit">Update</Button>
                <Button onClick={navigateToUpdate}>Cancel</Button>
            </Form>
        </Container>
    );
}