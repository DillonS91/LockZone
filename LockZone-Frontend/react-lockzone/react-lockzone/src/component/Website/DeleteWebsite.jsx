import axios from "axios";
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const DeleteWebsite = ({locationState}) => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try{
            axios.delete(`http://localhost:8080/websites/${locationState.websiteId}`)
            
        }catch(err){
            console.log('hello')
            console.error(err);
        }finally {
            navigate('/websites');
            window.location.reload(false);
        }
    }
    const handleExit = async(event) =>{
        navigate(`/websites`);
    }
    return(
        <Card style={{width:"40%", marginLeft:"30%"}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Click here if you want to delete this website</Form.Label>
                </Form.Group>
                <Form.Group>
                <Button variant = "danger" type= "submit">
                    Delete Website
                </Button>
                <Button variant = "secondary" onClick= {handleExit}>
                    Cancel Delete
                </Button>
                </Form.Group>
            </Form>
        </Card>
    )
}