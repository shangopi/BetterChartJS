import React from "react";
import ArcCustomize from "./../ChartPages/Arc_Customize";
import Nav from "../../components/Navbar/Navbar";

const dataset = [
  ["Fire", "Machine 1", 5],
  ["Fire", "Machine 2", 7],
  ["Fire", "Machine 3", 6],
  ["Water", "Machine 1", 2],
  ["Water", "Machine 2", 9],
  ["Water", "Machine 3", 4],
];

const Graph = function () {
  return <ArcCustomize data_array={dataset} />;
};

function BeginnerArcChart() {
  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Arc Diagrams</h1>
        <hr />
        <br />
        <p className="lead px-3">
          An arc diagram is a style of graph drawing, in which the vertices of a
          graph are placed along a line in the Euclidean plane, with edges being
          drawn as semicircles in one or both of the two halfplanes bounded by
          the line, or as smooth curves formed by sequences of semicircles. In
          some cases, line segments of the line itself are also allowed as
          edges, as long as they connect only vertices that are consecutive
          along the line.
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
          &emsp;<u>Arc Diagram</u>
        </p>
        <br />
        <br />
        <Graph />
        <br />
        <hr />
        <p className="p-3">
          A possible variation in arc diagrams consists to make the links wider
          when the connection is stronger. To do so you need a weighted network
          where each connection as a weight.
        </p>
        <p className="p-3 pt-0">
          The order of nodes is the key for arc diagrams.
        </p>
      </div>
    </div>
  );
}

export default BeginnerArcChart;
