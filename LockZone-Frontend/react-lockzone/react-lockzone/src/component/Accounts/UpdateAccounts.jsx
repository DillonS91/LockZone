import axios from 'axios';
import { useRef, useState } from 'react';
import { Button, Form, Card, Row, Col, InputGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const UpdateAccounts = ({locationState}) => {
    //password stuff
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
    const handleExit = async(event) =>{
        navigate(`/websites/${locationState.websiteId}`);
    }


    const accnameRef = useRef();
    const accpasswordRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {              
        try {
            axios.put(`http://localhost:8080/accounts/${locationState.accountId}`,
                {
                    accnames: accnameRef.current.value,
                    accpassword: accpasswordRef.current.value,
                    website: {
                        websiteId:locationState.websiteId,
                        master: {
                            masterId: locationState.masterId
                        }
                    }
                }
            )
        } catch (err) {
            console.error(err);
        } finally {
            navigate(`/websites/${locationState.websiteId}`);
            window.location.reload(false);
        }
    }

    return(
        <Card style={{width:"50%", marginLeft:"25%"}}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-1">
                    <Form.Group as={Col} md="8">
                        <Form.Label>Update Account Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter a new Account Name" name = 'accnames' ref = {accnameRef} required/>
                    </Form.Group>
                    <Form.Group as={Col} md="8">
                        <Form.Label>Update Password</Form.Label>
                                <Form.Control type="text" placeholder="Enter a new Account Password" name = 'accpassword' ref = {accpasswordRef} required/>
                    </Form.Group>
                </Row>
                <Button variant= "success" type="submit">Update</Button>
                <Button variant = "secondary" onClick= {handleExit}>
                    Cancel Update
                </Button>
            </Form>
            <Form.Label>Click here to generate a randomized password</Form.Label>
            <Row>
                <Col>
                    <Button onClick={handleRandomizedPassword}>Randomized</Button>
                </Col>
                <Col>{randomPassword.randomizedPassword}</Col>
            </Row>
            <Form noValidate validated={validated} onSubmit={handlePost}>
                <Row className='mb-3'>
                    <Form.Group as={Col} md='10' controlId='validationCustomUsername'>
                        <Form.Label>Enter a word, a phrase, or a random string of characters</Form.Label>
                            <InputGroup hasValidation>
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
        </Card>
    );
}