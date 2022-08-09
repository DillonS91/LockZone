import { Axios } from 'axios';
import { useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';

export const LoginComponent = () => {
        
    const masterUserName = useRef('');
    const masterPassword = useRef('');
    const navigate = useNavigate();
    const navigateToUpdate = () =>{
        navigate('/home');
    }

    const [cookies, setCookies] = useCookies('Authority')

    const login = async () => {
        const user = {
            name: masterUserName.current.value,
            password: masterPassword.current.value
        };

        try{
            await Axios.post('http://localhost:8080/', user)
            setCookies('Authority', res.data.authority)
        }catch(error){
            console.log(error);
        }finally{
            navigateToUpdate();
        }

    }

    const handleSubmit = async (event) => {
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    return(
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                        <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type='text' placeholder='Example123 / Example@email.com' name='name' ref={masterUserName} required/>
                                <Form.Control.Feedback type='invalid'>Please choose a website.</Form.Control.Feedback>
                            </InputGroup>
                        <Form.Label>Enter a New Password</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type='text' placeholder='aBc123$%^DeF' name='password' ref={masterPassword} required/>
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