import { Navbar, Nav, Button, Image, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <aside>
      <Navbar
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <NavLink className="navbar-brand" to="/">
          <Image
            src="/assets/Spotify_Logo.png"
            alt="Spotify Logo"
            width="131"
            height="40"
          />
        </NavLink>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse>
          <Nav className="navbar-nav">
            <ListGroup>
              <ListGroup.Item>
                <NavLink className="nav-item nav-link" to="/">
                  <i className="fas fa-home fa-lg"></i>&nbsp; Home
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink className="nav-item nav-link" to="/your-library">
                  <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <Searchbar />
              </ListGroup.Item>
            </ListGroup>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <NavLink to="/">Cookie Policy</NavLink>
            <NavLink to="/">Privacy</NavLink>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
