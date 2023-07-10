import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Header.scss'

const Header = () => {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff4d94' }}>
                <Link className="navbar-brand" to='/'>Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student">Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link bg bg-warning">Hi..Kousik</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Login</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <header className="header">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="/courses">courses</Nav.Link>
                                <Nav.Link href="/blog">blog</Nav.Link>
                                <Nav.Link href="#link">contact</Nav.Link>
                                <Nav.Link href="#link">login</Nav.Link>
                                <NavDropdown title="Hi Kousik" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Profile
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item> */}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

        </>
    )
}

export default Header