import React from "react";
//MUI
//MUI Cards
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//className='no-gutter'
function UpdateActivityModal(props) {
    return (
        <React.Fragment>
            <Modal.Body>
                Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
        </React.Fragment>
    );
}

export default UpdateActivityModal;
