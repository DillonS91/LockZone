import {useRef, useState} from "react";
import axios from "axios";
import {Form, Button, Row} from "react-bootstrap";
import {RegisterMasterModal} from "./RegisterMasterModal"


export const AddMaster = () =>{
    const[modalShow, setModalShow] = useState(false);
    //user
    const usernameRef = useRef();
    const userPasswordRef = useRef();
    //master
    const masterNameRef = useRef();
    const firstNameRef= useRef();
    const lastNameRef= useRef();
    const emailRef= useRef();

    const handleSubmit = async (event) =>{
        try {
            event.preventDefault();
            const { data } = await axios.post('http://localhost:8080/signup',
            {
                username : usernameRef.current.value,
                password : userPasswordRef.current.value,
                master: {
                    userName: masterNameRef.current.value,
                    firstName: firstNameRef.current.value,
                    lastName: lastNameRef.current.value,
                    email: emailRef.current.value
                }
            });
            //user
            usernameRef.current.value = null;
            userPasswordRef.current.value = null;
            //master
            masterNameRef.current.value =null;
            firstNameRef.current.value = null;
            lastNameRef.current.value = null;
            emailRef.current.value=null;
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
                    <Form.Control type = "username" ref = {usernameRef} required placeholder = "Enter Desired User Login Name"/>
                </Form.Group>
                <Form.Group as= {Row}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type ="password" ref = {userPasswordRef} required placeholder = "Enter Desired Password"/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Label>Master Account Username</Form.Label>
                <Form.Control name= "userName" ref={masterNameRef} required placeholder = "Enter Master Username you want shown" />
            </Row>
            <Row>
                <Form.Label>First Name</Form.Label>
                <Form.Control name= "firstName" ref={firstNameRef} required placeholder = "Enter your first name" />
            </Row>
            <Row>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name= "lastName" ref={lastNameRef} required placeholder = "Enter your last name" />
            </Row>
            <Row>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name= "email" ref={emailRef} required placeholder ="Enter your email address" />
            </Row>

        <Row>
            <Button variant = "primary" type="submit" > Create Master Account</Button>
        </Row>

        </Form>

        <RegisterMasterModal show={modalShow} onHide={ () => setModalShow(false)} />
        </>
    )

}