
import React, { useState} from "react"
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input 
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          type="text"
           placeholder ='First Name'/>
        <input 
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
          type="text" placeholder ='Last Name'/>
        <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder ='Email'/>
        <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password" placeholder ='Password'/>
        <br/>
        <input type='submit' value='Register'/>
      </form>
    </div>
  );
}

export default Register;
