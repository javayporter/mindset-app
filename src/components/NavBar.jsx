import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../stylesheets/NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar-cus" fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Mindset App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/diaries">Diary</Nav.Link>
          <Nav.Link href="/music">Music</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
