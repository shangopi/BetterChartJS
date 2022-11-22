import React from "react";
import ScatterCustomize from "./../ChartPages/ScatterCustomize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const label = [0, 1, 2, 3, 4, 5, 6];
const dataset = [0, 3, 7, 12, 18, 30, 45.6];

const Graph = function () {
  return (
    <ScatterCustomize xaxis="Elapsed Time" xlabel={label} dataset="Velocity" dataarray={dataset} />
  );
};

function BeginnerScatterChart() {
  TabTitle("Scatter Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
      <Container>
        <h1>Scatter Charts</h1>
        <hr />
        <br />
        <Alert className="lead px-3" variant="success" >
        A scatter chart (also called a scatterplot, scatter graph, scatter
          plot, scattergram, or scatter diagram) is a type of plot or
          mathematical diagram using Cartesian coordinates to display values for
          typically two variables for a set of data.If the points are coded
          (color/shape/size), one additional variable can be displayed.
        </Alert>
        
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
          &emsp;<u>Scatter Graph</u>
        </p>
        <br />
        <br />
        </Container>
        <Graph />
        <Container>
        <br />
        <hr />
        <br></br>
        <Alert className="p-3" variant="success" >
        The relationship between variables is called correlation. Correlation
          is just another word for “relationship.” For example, how much you
          weigh is related (correlated) to how much you eat. There are two type
          of correlation: positive correlation and negative correlation. If data
          points make a line from the origin from low x and y values to high x
          and y values the data points are positively correlated, like in the
          above graph. If the graph starts off with high y-values and continues
          to low y-values then the graph is negatively correlated.

          <hr></hr>

          A scatter plot can be used either when one continuous variable is
          under the control of the experimenter and the other depends on it or
          when both continuous variables are independent. If a parameter exists
          that is systematically incremented and/or decremented by the other, it
          is called the control parameter or independent variable and is
          customarily plotted along the horizontal axis. The measured or
          dependent variable is customarily plotted along the vertical axis. If
          no dependent variable exists, either type of variable can be plotted
          on either axis and a scatter plot will illustrate only the degree of
          correlation (not causation) between two variables.
        </Alert>
        <br></br>
        <br></br>
        </Container>
        
      </div>
    </div>
  );
}

export default BeginnerScatterChart;
