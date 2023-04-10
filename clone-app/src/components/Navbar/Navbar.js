
import "./Navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className="navElement" href="/">Netlify</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navElement" href="/">Home</Nav.Link>
                        <Nav.Link className="navElement" href="/FavList">Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;