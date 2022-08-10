import { Button, Card, Row, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useRef, useState } from "react";
import axios from "axios";


export const Login = () => {
    const nameRef = useRef('');
    const passwordRef = useRef('');

    const[,setCookie] = useCookies('Master')
    const[errorMessage, setErrorMessage] = useState('');

    const login = async() =>{
        let user = {
            username: nameRef.current.value,
            password: passwordRef.current.value
        };
        await axios.post("http://localhost:8080/login", user).then(res=>{
            setCookie('username', user.username);
            setCookie('Authority', res.data.authority);
            setCookie('Customer', res.data.customer);
            window.location.href = "http://localhost:3000/home"
        }).catch(e =>{
            setErrorMessage('Incorrect Login')
        });
    }
    return(
        <Card style={{width:"50%", marginLeft:"25%", justifyContent:"center"}}>
            <h3 style={{width:"100%", textAlign:"center"}}>Login</h3>
            <Form onKeyDown={(e) => {e.key==="Enter"?login():setErrorMessage('')}}>
                <Row style={{ justifyContent: "center" }}>
                    <Form.Label style={{ width: "25%", paddingRight: 0, fontSize: "18px" }}>Username: </Form.Label>
                    <Form.Control ref={nameRef} style={{ width: "55%", height: "32px" }} name="Username" required={true} placeholder='' />
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Form.Label style={{ width: "25%", paddingRight: 0, fontSize: "18px" }}>Password: </Form.Label>
                    <Form.Control ref={passwordRef} style={{ width: "55%", height: "32px", inputSecurity: "disc" }} type="password" name="password" required={true} />
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <p style={{textAlign:'center',color:'red'}}>{errorMessage}</p>
                    <Button variant="primary" onClick={() => {login()}}>Submit</Button>
                </Row>
            </Form>
        </Card>

    );
    
}