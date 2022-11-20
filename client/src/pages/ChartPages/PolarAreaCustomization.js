import React from 'react';
import PolarArea from '../../components/Chart_Components/PolarAreaChart';
import {Row, Col,Accordion, Card,Form} from 'react-bootstrap';
import { useState } from 'react';

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
 
const PolarAreaChartView = (props)=>{

    const [title_size,set_title_size] = useState(30);
    const [font,set_font] = useState('Raleway');
    const [show_heading, set_show_heading] = useState(true); 
    const [show_legend, set_show_legend] = useState(true);    
   


    const Pie_data = {
        labels: props.xlabel,
        datasets: [
          {
            label: '# of Votes',
            data: props.dataarray,
            
            
            borderWidth: 1,
          },
        ]
        
      };

    const PieCustomize = {   

        type: 'doughnut',      
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
  };

        


    return ( 
      <div className='pr-5 container'>            

      <Row>
        <Col>
          <Card>
              <Card.Header>Customize the Graph</Card.Header>
              <Card.Body>
              <Form className='ml-4'>
                      <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                          <Accordion.Header>Modify Chart</Accordion.Header>
                          <Accordion.Body>

                          <Row>
                                <Col>Show Heading</Col>
                                <Col><Form.Check 
                                    type="switch"
                                    id="custom-switchX"
                                    defaultChecked="true" onChange={(e) => {set_show_heading(!show_heading)}} /></Col>

                            </Row>

                            <Row>
                                <Col>Show Legend</Col>
                                <Col><Form.Check 
                                    type="switch"
                                    id="custom-switchX"
                                    defaultChecked="true" onChange={(e) => {set_show_legend(!show_legend)}} /></Col>

                            </Row>
                      
                      </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="1">
                          <Accordion.Header>Modify the Text</Accordion.Header>
                          <Accordion.Body>   
                                 
                                  <Row>
                                  <Col>  <Form.Label>Title Size</Form.Label> </Col>
                                  <Col> 
                                     <Form.Range onChange={(e) => {set_title_size(e.target.value)}} defaultValue={30} min='10'  max='50' />
                                  </Col>
                                  </Row>


                                  <Row>
                                  <Col>  <Form.Label>Titile Font Family </Form.Label> </Col>
                                  <Col> 
                                  <Form.Select size="sm" onChange={(e) => {set_font(e.target.value)}}>
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
      <Col lg={6}><PolarArea config={PieCustomize} data={Pie_data} />  </Col>
      <Col lg={1}></Col>
    </Row>
    <br></br>
      <br></br>
      <br></br> 

    </div>
  );
};

export default PolarAreaChartView;
