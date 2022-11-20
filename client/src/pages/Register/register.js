import React, { useState} from "react"
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TabTitle } from "../../utils/GeneralFunctions";

function Register() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate() 
  async function registerUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:4001/api/registerUser/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },

      body: JSON.stringify({
        firstName,
        lastName,
        password,
        email,
      }),
    })

    const data=await response.json();
    console.log(data);
    if(data.status === 'ok'){
        navigate('/login')
    }
  }
  TabTitle("SignUp - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>SignUp</h1>
        <hr />
        <br />
        <br />
        <div className="container col-6 offset-1">
          <Form onSubmit={registerUser}>
            <Form.Group class="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group class="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter Last Name"
              />{" "}
            </Form.Group>
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
              SignUp
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
