import axios from 'axios';
import { useRef } from 'react';
import { Button, Form, Container} from 'react-bootstrap';

export const Submission_Table_Website = () => {
    
    const urlNameRef = useRef();

    const handleSubmit = async (event) => {
        
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
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Username or Email</Form.Label>
                    <Form.Control name = 'urlName' ref = {urlNameRef} placeholder='Enter website url' />
                </Form.Group>
                <Button type="submit" class="btn btn-primary">Submit</Button>
            </Form>
        </Container>
        // <form onSubmit={handleSubmit}>
        //     <h1>Enter a new Website</h1>
        //     <input name = 'urlName' ref = {urlNameRef} placeholder='Enter website url'/>
        //     <br/>
        //     <Button type="submit" class="btn btn-primary">Submit</Button>
        // </form>
    );
}