import type { NextPage } from 'next';
import { Container, Nav, Navbar } from "react-bootstrap";

const Header: NextPage = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar fixed-top navbar-expand-lg navbar-light">
            <Container>
                <Navbar.Brand href="#home"><img src="/images/logo.png" className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#latest-projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
