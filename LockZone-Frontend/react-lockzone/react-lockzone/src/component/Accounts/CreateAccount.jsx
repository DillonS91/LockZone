import axios from "axios";
import { useRef} from "react";
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
export const CreateAccount = ({locationState}) => { 

    const accnameRef = useRef();
    const accpasswordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            const {data} = await axios.post(`http://localhost:8080/accounts`,
            {
                accnames: accnameRef.current.value,
                accpassword: accpasswordRef.current.value,
                website: {
                    websiteId: locationState.websiteId
                }
            }
            );
            
        } catch (err) {
            console.error(err);
        } finally {
            navigate(`/websites/${locationState.websiteId}`);
            window.location.reload(false);
        }
    }
    
    return(
        <Card>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="10">
                        <Form.Label>Account Name</Form.Label>
                                <Form.Control type="text" placeholder="Please enter a new Account Name" name = 'accname' ref = {accnameRef} required/>
                    </Form.Group>
                    <Form.Group as={Col} md="10">
                        <Form.Label>Account Password</Form.Label>
                                <Form.Control type="text" placeholder="Please enter a new Account Password" name = 'accpassword' ref = {accpasswordRef} required/>
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit">Submit form</Button>
            </Form>
        </Card>
    );
}