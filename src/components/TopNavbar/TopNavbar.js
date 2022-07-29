import "./TopNavbar.css";
import { Navbar, Button, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import user1 from "../../assets/user1.svg";
import notif from "../../assets/notif.svg";
import message from "../../assets/message.svg";

export default function TopNavbar(props) {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="top-navbar px-3 px-sm-5 pt-4 d-flex justify-content-between"
    >
      <div>
        <Navbar.Brand
          href="#home"
          className="d-flex flex-row align-items-center "
        >
          <img src={logo} alt="GoodSpace" />
          <div className="home-separator align-self-center" />
          <p className="home-text my-auto">Hire Instantly</p>
        </Navbar.Brand>
      </div>
      <div className="d-flex justify-content-end">
        <Nav variant="pills d-none d-lg-block">
          <Button variant="primary me-4">Find Work</Button>
          <Button variant="outline-secondary me-4" className="sec">
            Hire Talent
          </Button>
          <Button variant="outline-secondary me-4" className="sec">
            Make Friends
          </Button>
        </Nav>
        <a
          className="d-none d-sm-inline nav-link align-self-center me-4 position-relative"
          href="#notif"
        >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2<span className="visually-hidden">unread messages</span>
          </span>
          <img src={notif} alt="Notifications" title="Notifications" />
        </a>
        <a
          className="d-none d-sm-inline nav-link align-self-center me-4 position-relative"
          href="#message"
        >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2<span className="visually-hidden">unread messages</span>
          </span>
          <img src={message} alt="Messages" title="Messages" />
        </a>
        <a
          className="nav-link dropdown-toggle"
          href="#drop"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="user" src={user1} alt="John Doe" title="profile" />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav ms-0" />
      </div>
      <Navbar.Collapse id="basic-navbar-nav" className="mt-4">
        <Nav variant="pills" className="d-lg-none">
          <Button variant="primary me-4">Find Work</Button>
          <Button variant="outline-secondary me-4">Hire Talent</Button>
          <Button variant="outline-secondary me-4">Make Friends</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
