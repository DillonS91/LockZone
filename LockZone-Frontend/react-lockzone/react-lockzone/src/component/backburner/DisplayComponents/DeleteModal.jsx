import { Modal, Button } from "react-bootstrap";

export const DeleteModal = (props) => {
    return(
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Deletion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this account?
                <div>
                    <Button onClick={props.onHide}>Delete</Button>
                    <Button onClick={props.onHide}>Cancel</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}