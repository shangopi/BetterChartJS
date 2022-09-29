import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChartType from "./pages/ChartType/ChartType";
import ShowData from "./pages/ShowData/ShowData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="charttype" element={<ChartType />} />
        <Route path="showdata" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
