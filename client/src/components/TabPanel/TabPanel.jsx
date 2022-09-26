import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Drop from '../Drop/Drop';
import ChartSet from '../ChartSet/ChartSet'

function TabPanel() {
  return (
    <div className='container'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={{span:3, offset:1}}>
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
              <Drop />
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