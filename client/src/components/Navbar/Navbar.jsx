import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Nav() {
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

export default Nav;
