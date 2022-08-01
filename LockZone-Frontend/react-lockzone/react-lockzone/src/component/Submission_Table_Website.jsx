import axios from 'axios';
import React,{ useRef,useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

export const Submission_Table_Website = () => {
    
    const urlNameRef = useRef();
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
            await axios.post('http://localhost:8080', 
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
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Website</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Please Enter a new Website"
              name = 'urlName' 
              ref = {urlNameRef} 
              required
            />
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