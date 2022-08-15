import {useRef} from 'react'
import axios from 'axios';
import { Button, Card, Form } from 'react-bootstrap';
import { useCookies } from "react-cookie";

export const DeleteMaster = ({master, setRenderDeleteMaster, renderDeleteMaster}) =>{
    const[cookies, setCookie, removeCookie] = useCookies('Authority');
    axios.defaults.crossDomain=true
    axios.defaults.withCredentials = true
    const handleSubmit = async(event) =>{
        try{
            //event.preventDefault();
            axios.delete(`http://localhost:8080/master/${master.masterId}`)
            .then((res) => {
                if (res.status === 204){
                    removeCookie("Authority")
                    setCookie("JSESSIONID", undefined)
                    removeCookie("Master")
                    removeCookie("username")
                  }
            })

        }catch(err){
            console.error(err);
        }
    }

    return(
        <>
            <Card.Header>Delete Account</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Click button if you want to delete your account and all information related to it</Form.Label>
                    </Form.Group>
                    <Form.Group>
                    <Button variant = "danger" type= "submit">
                        Delete Master Account
                    </Button>
                    <Button variant = "secondary" onClick={() => setRenderDeleteMaster(!renderDeleteMaster)}>
                        Cancel Delete Account
                    </Button>
                    </Form.Group>
                    
                </Form>
            </Card.Body>
        </>
    )

}