import axios from "axios";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";

export const PasswordComponent = () => {
    
    const handleGetRandomizedPassword = () => {
        // should just be a GET call to backend to receive a randomized password
        // GET-MAPPING -> something like: http://localhost:8080/password/randomized
    }

    const handleGetShuffledPassword = () => {
        // needs to pass a string to backend and get back the shuffled and mutated string
        // POST -> send a string like "this is a test" to the back end so it can shuffle and mutate it
        // GET -> then we need to get that string back from the backend
        // POST-MAPPING -> something like: http://localhost:8080/passwords/shuffle/{"somestring"} 
        // GET-MAPPING -> something like: http://localhost:8080/passwords/shuffle
    }
    
    const handleGetLockZoneSpecial = () => {
        // Same functionality as Shuffle password, only difference is the method that will be called on the backend
        // POST-MAPPING -> something like: http://localhost:8080/passwords/special/{"somestring"}
        // GET-MAPPING -> something like: http://localhost:8080/passwords/special
    }

    return(
        <Container>
            <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Website</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" placeholder="" name = ''/>
                                <Form.Control.Feedback type="invalid">
                                 placeholder
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Container>
    );
}