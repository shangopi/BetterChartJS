/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChartType from "./pages/ChartType/ChartType";
import ShowData from "./pages/ShowData/ShowData";
<<<<<<< HEAD
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
=======
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
>>>>>>> 6eed330b83abe5f7bf85cebc3ee305923350df39

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="charttype" element={<ChartType />} />
<<<<<<< HEAD
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
=======
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
>>>>>>> 6eed330b83abe5f7bf85cebc3ee305923350df39
      </Routes>
    </BrowserRouter>
  );
}

export default App;