import React from "react";
import ChordCustomize from "./../ChartPages/Chord_Customize";
import Nav from "../../components/Navbar/Nav";

const dataset = [
  ["Fire", "Machine 1", 5],
  ["Fire", "Machine 2", 7],
  ["Fire", "Machine 3", 6],
  ["Water", "Machine 1", 2],
  ["Water", "Machine 2", 9],
  ["Water", "Machine 3", 4],
];

const Graph = function () {
  return <div></div>;
};

function BeginnerSankeyChart() {
  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Sankey Diagrams</h1>
        <hr />
        <br />
        <p className="lead px-3">
          Sankey diagrams are a type of flow diagram in which the width of the
          arrows is proportional to the flow rate. Sankey diagrams can also
          visualize the energy accounts, material flow accounts on a regional or
          national level, and cost breakdowns. The diagrams are often used in
          the visualization of material flow analysis.
        </p>
        <br />
        <h3>Example</h3>
        <br />
        <br />
        <p className="lead">
          &emsp;<u>CSV file</u>
        </p>
        <br />
        <div className="row">
          <div className="col-9 offset-1">
            <table className="table table-striped border border-secondary">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Film Type</th>
                  <th scope="col">Vote</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Comedy</td>
                  <td>4</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Romance</td>
                  <td>6</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Drama</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>SciFi</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="lead">
          &emsp;<u>Sankey Diagram</u>
        </p>
        <br />
        <br />
        <Graph />
        <br />
        <hr />
        <p className="p-3">
          Sankey diagrams emphasize the major transfers or flows within a
          system. They help locate the most important contributions to a flow.
          They often show conserved quantities within defined system boundaries.
          Therefore, sankey diagrams are often used in fields of science,
          especially physics. They are used to represent energy inputs, useful
          output, and wasted output.
        </p>
        <p className="p-3 pt-0"></p>
      </div>
    </div>
  );
}

export default BeginnerSankeyChart;
