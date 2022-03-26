import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../images/clipart295550.png";
function Header() {
  return (
    <>
      <Navbar className="nav" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              <img
                alt=""
                src={Icon}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              <span className="nav-text">Pocket Cusine</span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export { Header };
