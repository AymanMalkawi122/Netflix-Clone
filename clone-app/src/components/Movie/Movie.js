
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from "../ModalMovie/ModalMovie";

function Movie(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let data = props.data;
let url=props.url;

    let websitePath = "https://image.tmdb.org/t/p/original"

    return (
        <div className="moiveCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${websitePath}${data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.overview}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Add to Favorits</Button>
                </Card.Body>
            </Card>

           <ModalMovie data={data} show={show} handleClose={handleClose} absolutePath={`${websitePath}${data.poster_path}`} url={url}/>
        </div >
    )
}

export default Movie;
