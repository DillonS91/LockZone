import axios from "axios";
import { useRef} from "react";
import { Button, Form, Row, Col, Card} from 'react-bootstrap';

export const AddWebsite = ({masterId, websites, setWebsites}) => {
    const websiteRef = useRef();

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const {data} = await axios.post('http://localhost:8080/websites',
                {
                    urlName: websiteRef.current.value,
                    master: {
                        masterId: masterId
                    }
                }
            );

            setWebsites([...websites,data])
            websiteRef.current.value = null;
            
        } catch (err) {
            console.error(err)
        }
        
    }
    
    return(
        <Card style = {{width:"70%", marginLeft:"15%", justifyContent:"center"}}>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                    <Form.Label>Website</Form.Label>
                    <Form.Control name = 'urlName' ref = {websiteRef} required placeholder="Please Enter a new Website" />
                    </Col>
                </Row>
                <Button variant="success" type="submit">Submit Website Form</Button>
            </Form>
        </Card>
    );
}