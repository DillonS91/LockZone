import {useRef} from 'react'
import axios from 'axios';
import { Button, Card, Form } from 'react-bootstrap';

export const EditMaster = ({master, setMaster, renderEditMaster, setRenderEditMaster}) =>{
    const masterNameRef = useRef();
    const firstNameRef= useRef();
    const lastNameRef= useRef();
    const emailRef= useRef();

    const handleSubmit = async(event) =>{
        try{
            event.preventDefault();

            const {data} = await axios.put(`http://localhost:8080/master/${master.masterId}`,{
                masterId: master.masterId,
                userName: masterNameRef.current.value,
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value
            }
            );
            setMaster(data);
            setRenderEditMaster(!renderEditMaster);
        }catch(err){
            console.error(err);
        }
    }

return(
    <>
        <Card.Header>Edit Master Account Details</Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Master Username Cannot be Changed</Form.Label>
                    <Form.Control name="username" ref={masterNameRef} placeholder={master.username} defaultValue={master.username} disabled readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" ref={firstNameRef} placeholder={master.firstName} defaultValue={master.firstName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" ref={lastNameRef} placeholder={master.lastName} defaultValue={master.lastName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" ref={emailRef} placeholder={master.email} defaultValue={master.email} />
                </Form.Group>
                <Form.Group>
                <Button variant = "success" type= "submit">
                    Update Master Account
                </Button>
                <Button variant = "secondary" onClick={() => setRenderEditMaster(!renderEditMaster)}>
                    Cancel Updating Account
                </Button>
                </Form.Group>
            </Form>
        </Card.Body>
    </>
)

}