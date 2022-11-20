/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChartType from "./pages/ChartType/ChartType";
import ShowData from "./pages/ShowData/ShowData";
import BeginnerBarChart from "./pages/BeginnerPages/BeginnerBarChart";
import BeginnerAreaChart from "./pages/BeginnerPages/BeginnerAreaChart";
import BeginnerBubbleChart from "./pages/BeginnerPages/BeginnerBubbleChart";
import BeginnerLineChart from "./pages/BeginnerPages/BeginnerLineChart";
import BeginnerPieChart from "./pages/BeginnerPages/BeginnerPieChart";
import BeginnerPolarAreaChart from "./pages/BeginnerPages/BeginnerPolarChart";
import BeginnerRadarChart from "./pages/BeginnerPages/BeginnerRadarChart";
import BeginnerScatterChart from "./pages/BeginnerPages/BeginnerScatterChart";
import BeginnerArcChart from "./pages/BeginnerPages/BeginnerArcChart";
import BeginnerChordChart from "./pages/BeginnerPages/BeginnerChordChart";
import BeginnerSankeyChart from "./pages/BeginnerPages/BeginnerSankeyChart";
import Register from "./pages/Register/register"
import Login from "./pages/Login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="charttype" element={<ChartType />} />
        <Route path="showdata" element={<ShowData />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="areachart" element={<BeginnerAreaChart />} />
        <Route path="barchart" element={<BeginnerBarChart />} />
        <Route path="bubblechart" element={<BeginnerBubbleChart />} />
        <Route path="linechart" element={<BeginnerLineChart />} />
        <Route path="piechart" element={<BeginnerPieChart />} />
        <Route path="polarareachart" element={<BeginnerPolarAreaChart />} />
        <Route path="radarchart" element={<BeginnerRadarChart />} />
        <Route path="scatterchart" element={<BeginnerScatterChart />} />
        <Route path="arcchart" element={<BeginnerArcChart />} />
        <Route path="chordchart" element={<BeginnerChordChart />} />
        <Route path="sankeychart" element={<BeginnerSankeyChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;