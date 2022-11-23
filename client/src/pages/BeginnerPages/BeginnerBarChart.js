import React from "react";
import BarCustomize from "./../ChartPages/BarCustomize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";
import Alert from 'react-bootstrap/Alert';

import Container from 'react-bootstrap/Container';

const label = ["Comedy", "Romance", "Action", "Drama", "SciFi"];
const dataset = [4, 5, 6, 1, 4];

const Graph = function () {
  return (
    <BarCustomize xaxis="Vote" xlabel={label} dataset="Movie Types" dataarray={dataset} />
  );
};

function BeginnerBarChart() {
  TabTitle("Bar Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <Container>
        <h1>Bar Charts</h1>
        <hr />
        <br />
        <Alert className="lead px-3" variant="success" >
        A bar chart or bar graph is a chart or graph that presents categorical
          data with rectangular bars with heights or lengths proportional to the
          values that they represent. A bar graph shows comparisons among
          discrete categories. One axis of the chart shows the specific
          categories being compared, and the other axis represents a measured
          value. Some bar graphs present bars clustered in groups of more than
          one, showing the values of more than one measured variable.
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
            <table class="table table-striped table-bordered border-secondary">
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
          &emsp;<u>Bar Graph</u>
        </p>
        <br />
        <br />
        </Container>
        <Graph />
        <Container>
        <br />
        <hr />
        <Alert className="p-3" variant="success" >
        It is a really good way to show relative sizes: we can see which types
          of movie are most liked, and which are least liked, at a glance. We
          can use bar graphs to show the relative sizes of many things, such as
          what type of car people have, how many customers a shop has on
          different days and so on.

          <hr></hr>

          Bar Graphs are good when your data is in categories (such as "Comedy",
          "Drama", etc). But when you have continuous data (such as a person's
          height) then use a Histogram. It is best to leave gaps between the
          bars of a Bar Graph, so it doesn't look like a Histogram.
        </Alert>
        <br></br>
        <br></br>
        </Container>

      </div>
    </div>
  );
}

export default BeginnerBarChart;
