import React from "react";
import Nav from "../../components/Navbar/Nav";
import ChartChoose from "../../components/ChartChoose/ChartChoose";

function ChartType() {
  return (
    <div>
      <Nav />
      <br />
      <div className="h3 px-5 py-3 border">Choose chart type:</div>
      <br />
      <div className="container">
        <ChartChoose />
      </div>
    </div>
  );
}

export default ChartType;
