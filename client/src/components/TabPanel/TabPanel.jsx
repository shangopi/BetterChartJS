import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Drop from "../Drop/Drop";
import ChartSet from "../ChartSet/ChartSet";
import { useNavigate } from "react-router-dom";

function TabPanel() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();

  function routeToPage() {
    // to={{ pathname: "/charttype", state: selectedFile }}
    console.log("Selected file is: ", selectedFile);
    // , { state: { file: selectedFile } }
    console.log("Navigate IS ", navigate);
    navigate("/charttype");
  }
  return (
    <div className="container">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={{ span: 3, offset: 1 }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Upload CSV</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Choose Chart type</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Drop
                  setSelectedFile={setSelectedFile}
                  selectedFile={selectedFile}
                  routeToPage={routeToPage}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ChartSet />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default TabPanel;
