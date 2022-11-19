import React from "react";
import ChordCustomize from "./../ChartPages/Chord_Customize";
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
  return <ChordCustomize data_array={dataset} />;
};

function BeginnerChordChart() {
  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Chord Diagrams</h1>
        <hr />
        <br />
        <p className="lead px-3">
          A chord diagram is a graphical method of displaying the
          inter-relationships between data in a matrix. The data are arranged
          radially around a circle with the relationships between the data
          points typically drawn as arcs connecting the data.
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
          &emsp;<u>Chord Diagram</u>
        </p>
        <br />
        <br />
        <Graph />
        <br />
        <hr />
        <p className="p-3">
          Chord diagrams are useful for showing relationships between entities
          and their relative magnitudes in comparison to alternative arcs. As a
          result, chord diagrams are popular in migration studies, economic
          flows, and genome studies.
        </p>
        <p className="p-3 pt-0">
          Chord diagrams are eye catching and quite popular in data
          visualization. They allow to visualize weigthed relationships between
          several entities.
        </p>
      </div>
    </div>
  );
}

export default BeginnerChordChart;
