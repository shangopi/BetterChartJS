import React, { useState } from "react";
import Nav from "../../components/Navbar/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TabTitle } from "../../utils/GeneralFunctions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iswrong, setiswrong] = useState(false);
  const [isok, setisok] = useState(false);
  const [loading,setloading] = useState(false);


  async function loginUser(event) {
    event.preventDefault();
    setloading(true);
    setisok(false);
      setiswrong(false);
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
      setisok(true);
      setloading(false);
      setiswrong(false);
      
      window.location.href = "/";
    } else {
      setisok(false);
      setloading(false);
      setiswrong(true);
    }
    console.log(data);
  }
  TabTitle("Login - BetterChartJS");

  return (
    <div>
      
      <Nav />
      <Container>
      <div className="m-5">
        <h1>Login</h1>
        <hr />
        <br />
        <br />
        <Row>
          <Col md={6}>
          <img  className="img-fluid" 
     src={"https://cdni.iconscout.com/illustration/premium/thumb/graph-analysis-4090812-3391023.png"     } 
     alt="logo"/>
          </Col>
        <Col  md={6}>
        <div className=" offset-1">
          <br></br>
          <br></br>
          <br></br>
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
          <br></br>
          <br></br>
          {iswrong && <Alert className="lead px-3" variant="danger" >
              Your Login is unsuccessful .. Please check the email and the password 
        </Alert>}
        {isok && <Alert className="lead px-3" variant="success" >
               Your Login is Successful.. 
        </Alert> }
        {loading && <Alert className="lead px-3" variant="warning" >
               Loading ... Please wait.. 
        </Alert> }
        </div>
        </Col>
        </Row>
      </div>
      </Container>
    </div>
  );
}

export default Login;
