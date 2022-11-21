import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { Nav as Navi } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwtdecode from "jwt-decode";

export function Nav() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtdecode(token);
      console.log("The token ", user);
      if (!user) {
        localStorage.removeItem("token");
      } else {
        console.log("User is here");
        setIsLogged(true);
      }
    }
    console.log("Cheking the token", token);
    // else{ navigate('/login');}
  }, []);

  function navigateRegister() {
    navigate("/register");
  }
  function navigateLogin() {
    navigate("/login");
  }

  function logout() {
    setIsLogged(false);
    localStorage.removeItem("token");
    navigate("/")
  }
  function viewCharts(){
    navigate('/savedCharts')
  }

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
          {!isLogged && (
            <div className="ms-auto me-3">
              <button
                type="button"
                class="btn btn-outline-light"
                onClick={navigateRegister}
              >
                SignUp
              </button>
            </div>
          )}
          {!isLogged && (
            <div className="me-1">
              <button
                type="button"
                class="btn btn-outline-light"
                onClick={navigateLogin}
              >
                Login
              </button>
            </div>
          )}
          {isLogged && (
            <div className="ms-auto me-1">
              <button
                type="button"
                class="btn btn-outline-light"
                onClick={logout}
              >
                Log Out
              </button>
            </div>
          )}
          {isLogged && (
            <div className="ms-auto me-1">
              <button
                type="button"
                class="btn btn-outline-light"
                onClick={viewCharts}
              >
               View My Saved Charts
              </button>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
