import React, { useState} from "react"

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:4001/api/loginUser/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },

      body: JSON.stringify({
        password,
        email,
      }),
    })

    const data=await response.json();
    if(data.user){
      console.log("This is dataaaa",data)
      localStorage.setItem('token',data.user)
      alert('Login Successful')
      window.location.href='/';
    }else{
      alert('Please check the email and the password');  
    }
    console.log(data);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder ='Email'/>
        <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password" placeholder ='Password'/>
        <br/>
        <input type='submit' value='Login'/>
      </form>
    </div>
  );
}

export default Login;
