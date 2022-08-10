import React from 'react'
import { ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';

export const RegisterMasterModal = (props) => {
    const navigate = useNavigate();

    const handleClick = async() =>{
        navigate("/login")
    }

    return(
        <Modal
        {...props}
        size="xl"
        aria-labelledby ="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Master Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Please Login now to begin password management
                <b/>
                <Button onClick={handleClick}>Login</Button>
            </Modal.Body>
        </Modal>
    )
}