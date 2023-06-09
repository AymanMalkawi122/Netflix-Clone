
import "./ModalMovie.css"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState} from 'react';

async function AddQuery(obj,url,comment) {
    const response = await fetch(url.concat('/addMovie'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ title: obj.title, release_date: obj.release_date, poster_path: obj.poster_path, overview: obj.overview,comment:comment })
    })
}
 


function ModalMovie(props) {
    let data = props.data, show = props.show, handleClose = props.handleClose, absolutePath = props.absolutePath,url=props.url;
let comment;
    function AddFav() {
        AddQuery(data,url,comment);
        alert("Successfully Added!");
        handleClose();
    }
    function handleChange(e) {
        comment = e.target.value;
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header id="modalHeader" closeButton>
            </Modal.Header>

            <Modal.Body id="modalBody">
                <Modal.Title>{data.title}</Modal.Title>
                <img alt="modalImage" id='modalImage' src={`${absolutePath}`} />
                <Form>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="Comment" onChange={handleChange} as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={AddFav}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;