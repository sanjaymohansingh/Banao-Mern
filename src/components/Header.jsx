import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>All Posts</Nav.Link>
          <Nav.Link>Article</Nav.Link>
          <Nav.Link>Event</Nav.Link>
          <Nav.Link>Education</Nav.Link>
          <Nav.Link>Job</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="btn btn-outline-secondary mr-2">
            Write Post
          </Nav.Link>
          <Nav.Link className="btn btn-primary">Join Group</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
