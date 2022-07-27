import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

//====================================================
const TopNavbar = () => {
  return (
    <>
      <Navbar className="d-lg-none" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">املاک هاشمی</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/search">
                جسنجو
              </Link>
              <Link className="nav-link" to="/myAds">
                آگهی های من
              </Link>
              <Link className="nav-link" to="/agents">
                نماینده ها
              </Link>
              <Link className="nav-link" to="/profile">
                پروفایل
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
