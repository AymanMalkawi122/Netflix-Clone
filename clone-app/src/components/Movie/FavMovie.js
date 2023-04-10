
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FavMovie(props) {




let data = props.data;
let url = props.url;

let websitePath = "https://image.tmdb.org/t/p/original"

async function handleUpdate() {
    let comment=prompt("Please enter your Comment", "Comment");
    if(comment == null || comment == "")
return;
    const response = await fetch(url.concat(`/UPDATE/${data.id}`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ comment:comment})
    })
    window.location.reload(true);
}

async function handleDelete() {
    const response = await fetch(url.concat(`/DELETE/${data.id}`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    window.location.reload(true);
}

return (
    <div className="moiveCard">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${websitePath}${data.poster_path}`} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>

                <Card.Text>
                    {data.overview}
                </Card.Text>

                <Card.Text>
                    {"comment: " + data.comment}
                </Card.Text>

                <Button variant="primary" onClick={handleDelete}>
                    Delete
                </Button>

                <Button variant="secondary" onClick={handleUpdate}>
                    Update
                </Button>

            </Card.Body>
        </Card>
    </div >
)
}

export default FavMovie;
