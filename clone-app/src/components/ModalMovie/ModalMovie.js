
import "./ModalMovie.css"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ModalMovie(props) {
    let data=props.data, show = props.show, handleClose = props.handleClose, absolutePath = props.absolutePath;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header id="modalHeader" closeButton>
            </Modal.Header>

            <Modal.Body id="modalBody">
            <Modal.Title>{data.title}</Modal.Title>
                <img id='modalImage' src={`${absolutePath}`} />
                <Form>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;