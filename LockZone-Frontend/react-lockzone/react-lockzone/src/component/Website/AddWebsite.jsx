import axios from "axios";
import { useRef } from "react";
import { Button, Form, Row, Col, Card } from 'react-bootstrap';


export const AddWebsite = ({setWebsite, renderAddWebsite, setRenderAddWebsite, master}) => {
    const websiteNameRef = useRef();

    const handleSubmit = async (event) => {
        try {
            
            const {data} = await axios.post(`http://localhost:8080/websites`,
                {
                    name: websiteNameRef.current.value,
                    master: {
                        masterId: master.masterId
                    }
                }
            );
            setWebsite([data]);
            setRenderAddWebsite(!renderAddWebsite);
        } catch (err) {
            console.error(err)
        } 
    }
    
    return(
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="10">
                        <Form.Label>Website</Form.Label>
                                <Form.Control type="text" placeholder="Please Enter a new Website" name = 'name' ref = {websiteNameRef} required/>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Card.Body>
    );
}