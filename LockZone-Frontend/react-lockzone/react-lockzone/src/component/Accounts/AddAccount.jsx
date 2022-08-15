import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form, Row, Col, Card, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const AddAccount = ({website, setAccount, renderAddAccount, setRenderAddAccount, account}) => {
    const [validated, setValidated] = useState(false);
    const messageRef = useRef('');
    const [randomPassword, setRandomPassword] = useState(''); //randomPassword.randomizedPassword
    const [shufflePassword, setShufflePassword] = useState(''); //shufflePassword.shuffledPassword
    const [specialPassword, setSpecialPassword] = useState(''); //specialPassword.specialPassword

    //password handlers
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
        event.preventDefault();
        if (form.checkValidity() === false) {
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

    const accountNameRef = useRef();
    const accountPasswordRef = useRef();
    const websiteIdRef=useRef();
    const handleSubmit = async (event) => {
        try {   
            const {data} = await axios.post(`http://localhost:8080/accounts`,
                {
                    accnames: accountNameRef.current.value,
                    accpassword: accountPasswordRef.current.value,
                    website: {
                        websiteId: websiteIdRef.current.value
                    }
                    
                }
            );
            setAccount([data]);
            setRenderAddAccount(!renderAddAccount);
        } catch (err) {
            console.error(err)
        } 
    }
    return(
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="10">
                        <Form.Label>Account</Form.Label>
                                <Form.Control type="text" placeholder="Please Enter a Account name" name = 'name' ref = {accountNameRef} required/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="10">
                        <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Please Enter a password" name = 'name' ref = {accountPasswordRef} required/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="10">
                        <Form.Label>Website Id</Form.Label>
                                <Form.Control type="text" placeholder="Please Enter Correct ID" name = 'name' ref = {websiteIdRef} required/>
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit">Submit Account</Button>
            </Form>
            <Form.Label>Click here to generate a randomized password</Form.Label>
            <Row>
                <Col>
                    <Button onClick={handleRandomizedPassword}>Randomized</Button>
                </Col>
                <Col>{randomPassword.randomizedPassword}</Col>
            </Row>
            <Form onSubmit={handlePost}>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='10'>
                        <Form.Label>Enter a word, a phrase, or a random string of characters</Form.Label>
                            <InputGroup>
                                <Button type="submit">Submit</Button>
                                <Form.Control type='text' placeholder='password / this is a password/ A$ad$rg!!@ggpi0' ref={messageRef} required/>
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
        </Card.Body>
    );
}