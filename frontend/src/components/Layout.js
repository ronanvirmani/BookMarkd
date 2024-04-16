import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-primary">
                <Container>
                    <Navbar.Brand href="/">BookMarkd</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/annotations">Annotations</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;