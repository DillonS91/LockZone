import axios from "axios";
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const DeleteAccounts = ({locationState}) => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try{
            axios.delete(`http://localhost:8080/accounts/${locationState.accountId}`)     
        }catch(err){
            console.log('hello')
            console.error(err);
        }finally {
            navigate(`/websites/${locationState.websiteId}`);
            window.location.reload(false);
        }
    }
    const handleExit = async(event) =>{
        navigate(`/websites/${locationState.websiteId}`);
    }
    return(
        <Card style={{width:"40%", marginLeft:"30%"}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Click here if you want to delete this account</Form.Label>
                </Form.Group>
                <Form.Group>
                <Button variant = "danger" type= "submit">
                    Delete Account
                </Button>
                <Button variant = "secondary" onClick= {handleExit}>
                    Cancel Delete
                </Button>
                </Form.Group>
            </Form>
        </Card>
    )
}