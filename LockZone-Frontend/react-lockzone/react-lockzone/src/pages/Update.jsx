//import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
//import { Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { EditWebsite } from '../component';


export const Update = () => {
    
    const urlNameRef = useRef();
    const [validated, setValidated] = useState(false);
    
    const location = useLocation();
    const [locationState, setLocationState] = useState({masterId:'', webId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[]);

    return(
        <EditWebsite locationState ={locationState}/>
    );


    // const navigate = useNavigate();
    // const handleSubmit = async (event) => {              
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     setValidated(true);

    //     try {
    //         axios.put(`http://localhost:8080/websites/${locationState.webId}`,
    //             {
    //                 urlName: urlNameRef.current.value,
    //                 master: {
    //                     masterId: locationState.masterId
    //                 }
    //             }
    //         )
    //     } catch (err) {
    //         console.error(err);
    //     } finally {
    //         navigate('/home');
    //     }
    // }

    // return(
    //     <Container>
    //         <Form noValidate validated={validated} onSubmit={handleSubmit}>
    //             <Row className="mb-3">
    //                 <Form.Group as={Col} md="4" controlId="validationCustomUsername">
    //                     <Form.Label>Website Update</Form.Label>
    //                         <InputGroup hasValidation>
    //                             <Form.Control type="text" placeholder="Enter a new Website here" name = 'urlName' ref = {urlNameRef} required/>
    //                             <Form.Control.Feedback type="invalid">
    //                                 Please provide a new website.
    //                             </Form.Control.Feedback>
    //                         </InputGroup>
    //                     </Form.Group>
    //             </Row>
    //             <Button type="submit">Update</Button>
    //         </Form>
    //     </Container>
    // );
}
