import {useRef, useState} from "react";
import axios from "axios";
import {Form, Button, Row} from "react-bootstrap";
import {RegisterMasterModal} from "./RegisterMasterModal"


export const AddMaster = () =>{
    const[modalShow, setModalShow] = useState(false);

    const nameRef = useRef();
    const passwordRef= useRef();
    const usernameRef = useRef();
    const userPasswordRef = useRef();

    const handleSubmit = async (event) =>{
        try {
            event.preventDefault();
            const { data } = await axios.post('http://localhost:8080/signup',
            {
                username : usernameRef.current.value,
                password : userPasswordRef.current.value,
                master: {
                    name: nameRef.current.value,
                    password: passwordRef.current.value
                }
            });

            usernameRef.current.value = null;
            userPasswordRef.current.value = null;
            nameRef.current.value =null;
            passwordRef.current.value = null;
            setModalShow(true)
        }catch(err){
            console.error(err);
        }
    }


    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Row}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type = "username" ref = {usernameRef} required placeholder = "Enter UserName"/>
                </Form.Group>
                <Form.Group as= {Row}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type ="password" ref = {userPasswordRef} required placeholder = "Enter Password"/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Label>Master Account Name</Form.Label>
                <Form.Control name= "name" ref={nameRef} required placeholder = "Enter Master Account Name" />
            </Row>
            <Row>
                <Form.Label>Master Account Password</Form.Label>
                <Form.Control name= "password" ref={passwordRef} required placeholder ="Enter Master Account Desired Password" />
            </Row>

        <Row>
            <Button variant = "primary" type="submit" > Create Master Account</Button>
        </Row>

        </Form>

        <RegisterMasterModal show={modalShow} onHide={ () => setModalShow(false)} />
        </>
    )

}