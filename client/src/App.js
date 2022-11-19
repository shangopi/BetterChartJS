/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChartType from "./pages/ChartType/ChartType";
import ShowData from "./pages/ShowData/ShowData";
import Navbar from "./components/Navbar/Navbar";
import SavedCharts from "./pages/SavedCharts/SavedCharts";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

// import Arc_Customize from "./pages/ChartPages/Arc_Customize";
// import AreaCustomize from "./pages/ChartPages/AreaCustomize";
//import BarCustomize from "./pages/ChartPages/BarCustomize";
// import BubbleCustomize from "./pages/ChartPages/BubbleCustomize";
// import Chord_Customize from "./pages/ChartPages/Chord_Customize";
// import LineCustomize from "./pages/ChartPages/LineCustomize";
// import PieCustomize from "./pages/ChartPages/PieCustomize";
// import PolarAreaCustomization from "./pages/ChartPages/PolarAreaCustomization";
// import RadarCustomize from "./pages/ChartPages/RadarCustomize";
// import ScatterCustomize from "./pages/ChartPages/ScatterCustomize";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="charttype" element={<ChartType />} />
        <Route path="ShowData" element={<ShowData/>}/>
        <Route path="savedCharts" element={<SavedCharts/>}/>
        <Route path="chart" element={<Navbar />}>
       
          {/* <Route path="arc_chart" element={<Arc_Customize />} /> */}
          {/* <Route path="area_chart" element={<AreaCustomize />} /> */}
          {/* <Route path="bar_chart" element={<BarCustomize />} /> */}
          {/* <Route path="bubble_chart" element={<BubbleCustomize />} /> */}
          {/* <Route path="chord_chart" element={<Chord_Customize />} />
          <Route path="line_chart" element={<LineCustomize />} />
          <Route path="pie_chart" element={<PieCustomize />} />
          <Route path="polar_chart" element={<PolarAreaCustomization />} />
          <Route path="radar_chart" element={<RadarCustomize />} />
          <Route path="scatter_chart" element={<ScatterCustomize />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
