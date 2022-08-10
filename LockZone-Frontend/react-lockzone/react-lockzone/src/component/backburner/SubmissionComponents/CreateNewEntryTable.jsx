import axios from 'axios';
import { useRef, useState } from 'react';
import { Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';

export const CreateNewEntryTable = () => {
    const urlNameRef = useRef();
    const userNameRef = useRef();
    const userPasswordRef = useRef();
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        try {
            event.preventDefault();
            await axios.post('http://localhost:8080/', 
                {
                    urlName: urlNameRef.current.value
                }
            );
            urlNameRef.current.value='';
        } catch (error) {
            console.log(error);
        } 
    }

    return(
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Col} md="4" controlId='validationCustomUsername'> 
                        <Form.Label>Website</Form.Label>                     
                            <InputGroup hasValidation>
                                <Form.Control type='text' placeholder='Please Enter a new Website' name = 'urlName' ref = {urlNameRef} required/>
                                <Form.Control.Feedback type='invalid'> Please choose a website. </Form.Control.Feedback>
                            </InputGroup>
                        <Form.Label>Enter Username or Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type='text' placeholder = 'Example123 / Example@email.com' name='accname' ref={userNameRef} required/>
                                <Form.Control.Feedback type='invalid'> Please enter a username or email. </Form.Control.Feedback>
                            </InputGroup>
                        <Form.Label>Enter Password</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type='text' placeholder = 'aBc123$%^DeF' name='accpassword' ref={userPasswordRef} required/>
                                <Form.Control.Feedback type='invalid'> Please enter a password. </Form.Control.Feedback>
                            </InputGroup>
                    </Form.Group>
                </Row>
                <Button type='submit'>Submit form</Button>
            </Form>
        </Container>
    );
}