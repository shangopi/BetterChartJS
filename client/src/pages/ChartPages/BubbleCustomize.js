import React from 'react';
import BubbleChart from '../../components/Chart_Components/BubbleChart';
import {Row, Col,Accordion, Card,Form} from 'react-bootstrap';
import {SliderPicker } from 'react-color';
import { useState } from 'react';
import { useSelector } from "react-redux";


const BubbleChartView = ()=>{
    const x_axis = useSelector((state) => state.csvhandler.x_data);
    const y_axis = useSelector((state) => state.csvhandler.y_data);
    
    const [x_grid, set_x_grid] = useState(true);
    const [y_grid, set_y_grid] = useState(true);
    const [step_size_x,set_x_step] = useState(10);
    const [step_size_y,set_y_step] = useState(10);
    const [text_size,set_text_size] = useState(14);
    const [title_size,set_title_size] = useState(30);
    const [font,set_font] = useState('Raleway');
    const [orientation,set_orientation] = useState(0);    
    const [color,setcolor] = useState("#234400");
    const [color2,setcolor2] = useState("#124490");

    const Bubble_data = {
      datasets: [
        {
          label: 'Red dataset',
          data: [{x: 100,y: 0, r: 10}, {x: 60, y: 30,r: 20 }, { x: 40,y: 60, r: 25}, {x: 80,y: 80,r: 50}, {x: 20,y: 30,r: 25}, { x: 0, y: 100,r: 5}],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Blue dataset',
          data:[{x: 10,y: 100, r: 10}, {x: 40, y: 30,r: 20 }, { x: -40,y: 30, r: 25}, {x: 80,y: -80,r: 50}, {x: 10,y: 70,r: 25}, { x: -90, y: 100,r: 5}],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    const BubbleCustomize = {   

      scales: {
        x: {
                
          grid: {
              display: x_grid //x axis grid show
          },
         
          ticks: {
            maxTicksLimit: step_size_x,   
              maxRotation: orientation, // changing direction.. change both values to 0 if u want to change.. 
              minRotation: orientation,
              
              font: {
                  size: text_size,//this change the font size of x axis,
                  family: font, // Your font family
                  
              }
          }
      },

        y: {

          grid: {
            display: y_grid //x axis grid show
        },
        ticks: {
            maxTicksLimit: step_size_y,  
                maxRotation: orientation, // changing direction.. change both values to 0 if u want to change.. 
                minRotation: orientation,
            font: {
                size: text_size,//this change the font size of x axis,
                family: font, // Your font family
            }
        },

          beginAtZero: true,
        },
      },
      elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    
    plugins: {
          title: {
            display: true,
            text: 'Products with most number of sales in a given period',
            font: {
                
                size: title_size,
                family: font, // Your font family
              }
        },
        },    

    };

    return ( 
      <div className='pr-5'>            
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
                              <Col>Show X Axis Grids</Col>
                              <Col><Form.Check 
                                  type="switch"
                                  id="custom-switchX"
                                  defaultChecked="true" onChange={(e) => {set_x_grid(!x_grid)}} /></Col>

                          </Row>
                          
                          <Row>
                              <Col>Show Y Axis Grids
                              </Col>
                              <Col> <Form.Check 
                                  type="switch"
                                  id="custom-switchY"
                                  defaultChecked="true" onChange={(e) => {set_y_grid(!y_grid)}}

                              /></Col>

                          </Row> 
                           
                          <Row>
                          <Col>  <Form.Label>Step Size X </Form.Label> </Col>
                          <Col> 
                              <Form.Range  onChange={(e) => {set_x_step(e.target.value)}} defaultValue={5} min='2'  max='50' />
                             
                          </Col>
                          </Row>
                          <Row>
                          <Col>  <Form.Label>Step Size Y </Form.Label> </Col>
                          <Col> 
                          <Form.Range  onChange={(e) => {set_y_step(e.target.value)}} defaultValue={5} min='2'  max='50' />
                          </Col>
                          </Row>
                      </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                          <Accordion.Header>Change the Colors</Accordion.Header>
                          <Accordion.Body>
                                  
                                  <Row>
                                      <Form.Label>Color For Attribute 1  </Form.Label>                                        
                                      <SliderPicker color={color} onChange={setcolor} /> 
                                     
                                  </Row>
                                  {<br></br>} 
                                  <Row>
                                      <Form.Label>Color For Attribute 2  </Form.Label>                                         
                                      <SliderPicker color={color2} onChange={setcolor2} /> 

                                  </Row>
                      
                                  <Row>
                                      <Col>Show Y Axis Grids</Col>
                                      <Col> <Form.Check 
                                          type="switch"
                                          id="custom-switchY"
                                          defaultChecked="true"

                                      /></Col>

                                  </Row>                      
                                  {<br></br>}         
                                  <Row>
                                  <Col> <Form.Label>Bars Orientation </Form.Label> </Col>
                                  <Col> 
                                  <Form.Select size="sm" >
                                      <option value="1">Vertically</option>
                                      <option value="2">Horizontally</option>
                                  </Form.Select>
                                  </Col>
                                  </Row>
                                  
                                  
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                          <Accordion.Header>Modify the Text</Accordion.Header>
                          <Accordion.Body>   
                                  <Row>
                                  <Col>  <Form.Label>Text Size</Form.Label> </Col>
                                  <Col> 
                                     <Form.Range onChange={(e) => {set_text_size(e.target.value)}}  defaultValue={14} min='10'  max='40' />
                                  </Col>
                                  </Row>
                                  <Row>
                                  <Col>  <Form.Label>Title Size</Form.Label> </Col>
                                  <Col> 
                                     <Form.Range onChange={(e) => {set_title_size(e.target.value)}} defaultValue={30} min='10'  max='50' />
                                  </Col>
                                  </Row>


                                  <Row>
                                  <Col>  <Form.Label>Font Family </Form.Label> </Col>
                                  <Col> 
                                  <Form.Select size="sm" onChange={(e) => {set_font(e.target.value)}}>
                                      <option value="Raleway">Raleway</option>
                                      <option value="Roboto">Roboto</option>
                                      <option value="sans-serif">sans-serif</option>
                                      <option value="Montserrat">Montserrat</option>
                                  </Form.Select>
                                  </Col>
                                  </Row>
                                  
                                  <Row className="mt-2">
                                  <Col> <Form.Label>Text Orientation </Form.Label> </Col>
                                  <Col> 
                                  <Form.Select size="sm"  onChange={(e) => {set_orientation(e.target.value)}} >
                                      <option value="0">Horizontally</option>
                                      <option value="90">Vertically</option>
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
      <Col lg={8}><BubbleChart config={BubbleCustomize} data={Bubble_data} />  </Col>
    </Row>
    </div>
   );

}

export default BubbleChartView;