import axios from "axios";
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const DeleteWebsite = ({locationState} ) => {
    const navigate = useNavigate();

    const navigateToHome = () =>{
            navigate('/home');
    }

    const handleDelete = async (event) => {
        try{
            event.preventDefault();
            await axios.delete(`http://localhost:8080/websites/${locationState.webId}` )
        }catch (err){
            console.error(err);
        } finally {
            navigateToHome();
        }         
    }
   
    return(
        <Container>
            <Row>Are you sure you want to delete {locationState.urlName}?</Row>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={navigateToHome}>Cancel</Button>
        </Container>
    );
}