import axios from 'axios';
import { useRef } from 'react';
import { Button, Form, Container} from 'react-bootstrap';

export const SubmissionTableAccount = () => {
    
    const userNameRef = useRef();
    const userPasswordRef = useRef();

    const handleSubmit = async (event) => {
        
        try {
            event.preventDefault();
            await axios.post('http://localhost:8080', 
                {
                    accname: userNameRef.current.value,
                    accpassword: userPasswordRef.current.value
                }
            );
            userNameRef.current.value='';
            userPasswordRef.current.value='';
        } catch (error) {
            console.log(error);
        } 
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Username or Email</Form.Label>
                    <Form.Control name = 'accname' ref = {userNameRef} placeholder = 'Example@email.com' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control name = 'accpassword' ref = {userPasswordRef} placeholder = 'aBc123$%^DeF' /> 
                </Form.Group>
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </Form>
        </Container>
    );
}