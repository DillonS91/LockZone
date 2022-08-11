import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';

export const AddWebsite = () => {
    const websiteNameRef = useRef();
    const userIdRef = useRef();
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        userIdRef.current.value = 1;

        try {
            event.preventDefault();
            await axios.post('http://localhost:8080/websites?q=1',
                {
                    urlName: websiteNameRef.current.value,
                    master: {
                        masterId: userIdRef.current.value
                    }
                }
            );
            websiteNameRef.current.value = '';
            userIdRef.current.value = '';
        } catch (err) {
            console.error(err)
        }
        
    }
    
    return(
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Website</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type="text" placeholder="Please Enter a new Website" name = 'urlName' ref = {websiteNameRef} required/>
                                <Form.Control.Feedback type="invalid">
                                 Please choose a website.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Container>
    );
}