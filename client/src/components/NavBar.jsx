import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import "../stylesheets/NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const handleClick = () => {
    // define elements
    const appTitle = document.querySelector("#title");
    const hamburger = document.querySelector("#hamburger");
    const navLinks = document.querySelector(".nav-links");
    const closeIcon = document.querySelector(".close-svg");

    // Toggle classes to display/hide elements
    appTitle.classList.toggle("no-display");
    closeIcon.classList.toggle("display");
    hamburger.classList.toggle("hamburger");
    hamburger.classList.toggle("no-display");
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
      navLinks.classList.toggle("mobile");
    } else {
      navLinks.style.display = "block";
      navLinks.classList.toggle("mobile");
    }
  };
  return (
    <Navbar className="navbar" fixed="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand id="title" href="/">
          Mindset Mastery Mission
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link href="/diaries">About</Nav.Link>
          <Nav.Link href="/music">Mindful Music</Nav.Link>
          <Nav.Link href="/diaries">Diary</Nav.Link>
          <Nav.Link href="/music">Subscribe</Nav.Link>
        </Nav>
        <div className="nav-svgs" onClick={() => handleClick()}>
          <GiHamburgerMenu className="hamburger" id="hamburger" />
          <AiOutlineClose className="close-svg" />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
