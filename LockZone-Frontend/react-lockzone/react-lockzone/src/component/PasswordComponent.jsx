import axios from "axios";
import { useState, useRef } from "react";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";

export const PasswordComponent = () => {
    const [validated, setValidated] = useState(false);
    const [willRender, setWillRender] = useState(false);
    const messageRef = useRef('');
    const [randomPassword, setRandomPassword] = useState(''); //randomPassword.randomizedPassword
    const [shufflePassword, setShufflePassword] = useState(''); //shufflePassword.shuffledPassword
    const [specialPassword, setSpecialPassword] = useState(''); //specialPassword.specialPassword
    
    const handleRandomizedPassword = () => {
        fetch('http://localhost:8080/password/randomized').then( res => { return res.json(); } ).then( data => { setRandomPassword(data); } );
    }

    const handleGetShuffledPassword = () => { 
        fetch('http://localhost:8080/password/shuffle').then( res => { return res.json(); } ).then( data => { setShufflePassword(data); }); 
    }

    const handleGetLockZoneSpecial = () => {
        fetch('http://localhost:8080/password/special').then( res => { return res.json(); } ).then( data => { setSpecialPassword(data); });
    }

    const handlePost = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            //event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        try {
            axios.post(`http://localhost:8080/password/${messageRef.current.value}`);
            messageRef.current.value = '';
        } catch (err) {
            console.error(err);
        } 
    }

    return(
        <Container>
            <Form.Label>Click here to generate a randomized password</Form.Label>
            <Row>
                <Col>
                    <Button onClick={handleRandomizedPassword}>Randomized</Button>
                </Col>
                <Col>{randomPassword.randomizedPassword}</Col>
            </Row>
            <Form noValidate validated={validated} onSubmit={handlePost}>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                        <Form.Label>Enter a word, a phrase, or a random string of characters</Form.Label>
                            <InputGroup hasValidation>
                                <Button type="submit">Submit</Button>
                                <Form.Control type='text' placeholder='password / this is a password/ A$ad$rg!!@ggpi0' ref={messageRef} required/>
                                <Form.Control.Feedback type='invalid'>Please enter a word, phrase, or random set of characters.</Form.Control.Feedback>
                            </InputGroup>
                    </Form.Group>
                </Row>
            </Form>   
            <Form.Label>Click here to generate a new shuffled password</Form.Label>
            <Row>
                <Col>
                    <Button onClick={handleGetShuffledPassword}>Shuffle</Button>
                </Col>
                <Col>
                    {shufflePassword.shuffledPassword}
                </Col>
            </Row> 
            <Form.Label>Click here to generate a new "special" password</Form.Label>
            <Row>
                <Col>
                    <Button onClick={handleGetLockZoneSpecial}>Special</Button>
                </Col>
                <Col>
                    {specialPassword.specialPassword}
                </Col>
            </Row>
        </Container>
    );
}