import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "./DeleteModal";

export const CardRender = () => {
    const[modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();

    const navigateToUpdate = () =>{
        navigate('/');
    }

    return(     
        <Accordion.Body>
            Username: Nobody_Nose <br/>
            Password: password12345 
            <div>
                <Button onClick={navigateToUpdate}>Update</Button>
                <Button onClick={() => {setModalShow(true)}}>Delete</Button>

                <DeleteModal show={modalShow} onHide={() => {setModalShow(false)}}/>
            </div>
        </Accordion.Body>
    );
}

