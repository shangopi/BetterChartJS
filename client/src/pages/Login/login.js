import React, { useState } from "react";
import Nav from "../../components/Navbar/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TabTitle } from "../../utils/GeneralFunctions";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4001/api/loginUser/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        password,
        email,
      }),
    });

    const data = await response.json();
    if (data.user) {
      console.log("This is dataaaa", data);
      localStorage.setItem("token", data.user);
      alert("Login Successful");
      window.location.href = "/";
    } else {
      alert("Please check the email and the password");
    }
    console.log(data);
  }
  TabTitle("Login - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Login</h1>
        <hr />
        <br />
        <br />{" "}
        <div className="container col-6 offset-1">
          <Form onSubmit={loginUser}>
            <Form.Group class="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group class="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
              />{" "}
            </Form.Group>
            <br />
            <Button variant="outline-dark" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
