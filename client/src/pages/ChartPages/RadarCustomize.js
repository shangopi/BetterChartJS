import React from "react";
import RadarChart from "../../components/Chart_Components/RadarChart";
import { Row, Col, Accordion, Card, Form } from "react-bootstrap";
import { SliderPicker } from "react-color";
import { useState } from "react";

const RadarChartView = (props) => {
  const [title_size, set_title_size] = useState(30);
  const [label_size, set_label_size] = useState(15);
  const [font, set_font] = useState("Raleway");
  const [step_size, set_step_size] = useState(6);
  const [color, setcolor] = useState("#234400");
  const [color2, setcolor2] = useState("#124490");
  const [show_heading, set_show_heading] = useState(true);
  const [show_legend, set_show_legend] = useState(true);

  const RadarData = {
    labels: props.xlabel,
    datasets: [
      {
        label: props.dataset,
        data: props.dataarray,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const RadarCustomize = {
    responsive: true,

    plugins: {
      legend: {
        display: show_legend,
      },

      title: {
        display: show_heading,
        text: "Products with most number of sales in a given period",
        font: {
          size: title_size,
          family: font, // Your font family
        },
      },
    },

    scales: {
      r: {
        ticks: {
          maxTicksLimit: step_size,

          backdropColor: "orange",
          color: "white",
        },
        grid: {
          color: "black",
        },
        angleLines: {
          color: "gray",
        },
        pointLabels: {
          font: {
            size: label_size,
          },
        },
      },
    },
  };

  return (
    <div className="pr-5">
      <Row>
        <Col>
          <Card>
            <Card.Header>Customize the Graph</Card.Header>
            <Card.Body>
              <Form className="ml-4">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Modify Chart</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col>Show Heading</Col>
                        <Col>
                          <Form.Check
                            type="switch"
                            id="custom-switchX"
                            defaultChecked="true"
                            onChange={(e) => {
                              set_show_heading(!show_heading);
                            }}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>Show Legend</Col>
                        <Col>
                          <Form.Check
                            type="switch"
                            id="custom-switchX"
                            defaultChecked="true"
                            onChange={(e) => {
                              set_show_legend(!show_legend);
                            }}
                          />
                        </Col>
                      </Row>
                      {<br></br>}
                      <Row>
                        <Col>
                          {" "}
                          <Form.Label>Step Size</Form.Label>{" "}
                        </Col>
                        <Col>
                          <Form.Range
                            onChange={(e) => {
                              set_step_size(e.target.value);
                            }}
                            min={2}
                            max={10}
                            defaultValue={6}
                          />
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Change the Colors</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Form.Label>Color For Attribute 1 </Form.Label>
                        <SliderPicker color={color} onChange={setcolor} />
                      </Row>
                      {<br></br>}
                      <Row>
                        <Form.Label>Color For Attribute 2 </Form.Label>
                        <SliderPicker color={color2} onChange={setcolor2} />
                      </Row>

                      <Row>
                        <Col>Show Y Axis Grids</Col>
                        <Col>
                          {" "}
                          <Form.Check
                            type="switch"
                            id="custom-switchY"
                            defaultChecked="true"
                          />
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Modify the Text</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col>
                          {" "}
                          <Form.Label>Title Size</Form.Label>{" "}
                        </Col>
                        <Col>
                          <Form.Range
                            onChange={(e) => {
                              set_title_size(e.target.value);
                            }}
                            defaultValue={30}
                            min="10"
                            max="50"
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          {" "}
                          <Form.Label>Point Label Size</Form.Label>{" "}
                        </Col>
                        <Col>
                          <Form.Range
                            onChange={(e) => {
                              set_label_size(e.target.value);
                            }}
                            defaultValue={30}
                            min="5"
                            max="30"
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          {" "}
                          <Form.Label>Titile Font Family </Form.Label>{" "}
                        </Col>
                        <Col>
                          <Form.Select
                            size="sm"
                            onChange={(e) => {
                              set_font(e.target.value);
                            }}
                          >
                            <option value="Raleway">Raleway</option>
                            <option value="Roboto">Roboto</option>
                            <option value="sans-serif">sans-serif</option>
                            <option value="Montserrat">Montserrat</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={1}></Col>
        <Col lg={6}>
          <RadarChart config={RadarCustomize} data={RadarData} />{" "}
        </Col>
        <Col lg={1}></Col>
      </Row>
    </div>
  );
};

export default RadarChartView;
