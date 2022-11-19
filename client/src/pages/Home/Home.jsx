import React from 'react'
import Nav from '../../components/Navbar/Navbar';
import TabPanel from '../../components/TabPanel/TabPanel'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import jwtdecode from 'jwt-decode';




function Home() {
  const [isLogged,setIsLogged]=useState(false);
  const navigate =useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
        const user = jwtdecode(token)
        console.log("The token ",user)
        if(!user){
            localStorage.removeItem('token');

        }else{
            console.log("User is here")
            setIsLogged(true)
        }
    }
    console.log("Cheking the token",token);
    // else{ navigate('/login');}
},[])


  function navigateRegister (){
    navigate('/register')
  }
  function navigateLogin (){
    navigate('/login')
  }

  function logout(){
    setIsLogged(false);
    localStorage.removeItem('token');

  }

  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <TabPanel />
      <div>
        {!isLogged &&<div><button onClick={navigateRegister}>Register</button></div>}
        {!isLogged &&<div><button onClick={navigateLogin}>Login</button></div>}
        {isLogged && <div><button onClick={logout}>Log Out</button></div>}
      </div>
    </div>
  );
}

export default Home;

