import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "./DeleteModal";

//  *****DO NOT USE*****
//   This does not work
export const CardRender = ({ web }) => {
    const[modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();
    const navigateToUpdate = () =>{
        navigate('/update');
    }

    return(     
        <Accordion.Body>
            Username: {web.accounts.accname} <br/>
            Password: {web.accounts.accpassword} 
            <div>
                <Button onClick={navigateToUpdate}>Update</Button>
                <Button onClick={() => {setModalShow(true)}}>Delete</Button>
                <DeleteModal show={modalShow} onHide={() => {setModalShow(false)}}/>
            </div>
        </Accordion.Body>
    );
}

