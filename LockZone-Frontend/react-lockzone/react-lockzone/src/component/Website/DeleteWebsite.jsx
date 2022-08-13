import axios from "axios";
import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';

export const DeleteWebsite = ( props ) => {
    const[modalShow, setModalShow] = useState();

    const handleDelete = async (event) => {
    
        try{
            event.preventDefault();
            await axios.delete(`http://localhost:8080/websites/${props.id}` )
        }catch (err){
            console.error(err);
        };        
        
    }

    return(
        <></>
        // <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        //     <Modal.Header closeButton>
        //         <Modal.Title id='contained-modal-title-vcenter'>
        //             Deletion
        //         </Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         Are you sure you want to delete this Website {props.id}?
        //         <div>
        //             <Button class='close' onClick={handleDelete()}>Delete</Button>
        //             <Button onClick={props.onHide}>Cancel</Button>
        //         </div>
        //     </Modal.Body>
        // </Modal>
    );
}