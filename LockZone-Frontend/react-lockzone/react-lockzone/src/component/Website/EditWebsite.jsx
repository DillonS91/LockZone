import axios from 'axios';
import { useRef, useState } from 'react';
import { Button, Form, Card, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const EditWebsite = ({locationState}) => {
    
    const nameRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {              
        try {
            axios.put(`http://localhost:8080/websites/${locationState.websiteId}`,
                {
                    name: nameRef.current.value,
                    master: {
                        masterId: locationState.masterId
                    }
                }
            )
        } catch (err) {
            console.error(err);
        } finally {
            navigate(`/websites`);
            window.location.reload(false);
        }
    }
    const handleExit = async(event) =>{
        navigate(`/websites`);
    }

    return(
        <Card style={{width:"40%", marginLeft:"30%"}}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-1">
                    <Form.Group as={Col} md="8">
                        <Form.Label>Website Update</Form.Label>
                                <Form.Control type="text" placeholder="Enter a new Website or Application name here" name = 'name' ref = {nameRef} required/>
                    </Form.Group>
                </Row>
                <Button variant= "success" type="submit">Update</Button>
                <Button variant = "secondary" onClick= {handleExit}>
                    Cancel Update
                </Button>
            </Form>
        </Card>
    );
}