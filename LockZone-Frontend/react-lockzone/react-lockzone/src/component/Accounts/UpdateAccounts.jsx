import axios from 'axios';
import { useRef, useState } from 'react';
import { Button, Form, Card, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const UpdateAccounts = ({locationState}) => {
    
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
            navigate('/websites');
            window.location.reload(false);
        }
    }

    return(
        <Card style={{width:"35%", marginLeft:"10%"}}>
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
            </Form>
        </Card>
    );
}