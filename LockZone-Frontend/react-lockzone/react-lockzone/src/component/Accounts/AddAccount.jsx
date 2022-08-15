import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

export const AddAccount = ({website, setAccount, renderAddAccount, setRenderAddAccount, account}) => {
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
                <Button type="submit">Submit form</Button>
            </Form>
        </Card.Body>
    );
}