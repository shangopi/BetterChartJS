import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function BasicNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand href="">
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              BetterChartJS
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicNav;
