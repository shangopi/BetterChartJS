import React, { useState} from "react"
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TabTitle } from "../../utils/GeneralFunctions";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

function Register() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setloading] = useState(false);
  const [isok, setisok] = useState(false);
  const navigate=useNavigate() 
  async function registerUser(event){
    setisok(false)
    setloading(true)
    event.preventDefault()

    const response = await fetch('http://localhost:4001/api/registerUser/register',{ //register the user
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

      setloading(false)
      setisok(true)
        navigate('/login')
    }
  }
  TabTitle("SignUp - BetterChartJS");

  return (
    <div>
      <Nav />
      <Container>
      <div className="m-5">
      <h1>SignUp</h1>
        <hr />
        <br />
        <br />
      <Row>
      <Col md={6}>
          <img  className="img-fluid" 
     src={"https://cdni.iconscout.com/illustration/premium/thumb/presenting-chart-5831836-4859637.png"     } 
     alt="logo"/>
          </Col>
        <Col  md={6}>
      <div className="m-5">
        
        <div className="offset-1">
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
          <br></br>
          <br></br>
          {isok && <Alert className="lead px-3" variant="success" >
               Your Sign up is Successful.. Please Login..
        </Alert> }
        {loading && <Alert className="lead px-3" variant="warning" >
               Loading ... Please wait.. 
        </Alert> }
        </div>
      </div>
      </Col>
      </Row>
      </div>
      </Container>
    </div>
  );
}

export default Register;
