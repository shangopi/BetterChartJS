import React from 'react'
import Nav from "../../components/Navbar/Nav";
import TabPanel from '../../components/TabPanel/TabPanel'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import jwtdecode from 'jwt-decode';




function Home() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <TabPanel />

    </div>
  );
}

export default Home;

