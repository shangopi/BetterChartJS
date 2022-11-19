import React from "react";
import LineCustomize from "./../ChartPages/LineCustomize";
import Nav from "../../components/Navbar/Nav";

const label = [0, 1, 2, 3, 4, 5, 6];
const dataset = [0, 3, 7, 12, 18, 30, 45.6];

const Graph = function () {
  return (
    <LineCustomize xlabel={label} dataset="Velocity" dataarray={dataset} />
  );
};

function BeginnerLineChart() {
  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Line Charts</h1>
        <hr />
        <br />
        <p className="lead px-3">
          A line chart or line graph or curve chart is a type of chart which
          displays information as a series of data points called 'markers'
          connected by straight line segments. It is a basic type of chart
          common in many fields.
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
            <table class="table table-striped border border-secondary">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Elapsed Time</th>
                  <th scope="col">Velocity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>1</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2</td>
                  <td>7</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>3</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>4</td>
                  <td>18</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>5</td>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>6</td>
                  <td>45.6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="lead">
          &emsp;<u>Line Graph</u>
        </p>
        <br />
        <br />
        <Graph />
        <br />
        <hr />
        <p className="p-3">
          It is similar to a scatter plot except that the measurement points are
          ordered (typically by their x-axis value) and joined with straight
          line segments.
          <br />
          Understanding the process described by the data in the table is aided
          by producing a graph or line chart of speed versus time. Such a
          visualisation appears in the figure to the right. This visualization
          can let the viewer quickly understand the entire process at a
          glance.This visualization can however be misunderstood, especially
          when expressed as showing the mathematical function v(t) that
          expresses the speed v (the dependent variable) as a function of time
          t. This can be misunderstood as showing speed to be a variable that is
          dependent only on time. This would however only be true in the case of
          an object being acted on only by a constant force acting in a vacuum.
        </p>
      </div>
    </div>
  );
}

export default BeginnerLineChart;
