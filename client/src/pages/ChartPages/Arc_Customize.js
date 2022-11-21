import React from "react";
import ArcChart from "../../components/Chart_Components/ArcChart";
import { Row, Col, Accordion, Card, Form } from "react-bootstrap";
import { SliderPicker } from "react-color";
import { useState } from "react";
import { useSelector } from "react-redux";

const ArcChartView = (props) => {
  const arcData = useSelector((state) => state.csvhandler.arc_data);

  const [show_heading, set_show_heading] = useState(true);
  const [width, set_width] = useState(950);
  const [circle_size, set_circle_size] = useState(5);
  const [arc_size, set_arc_size] = useState(25);

    const [text_size,set_text_size] = useState("1.5");
    const [title_size,set_title_size] = useState("2");
    const [font,set_font] = useState('Raleway');
    const [font2,set_font2] = useState('Raleway');
    const [orientation,set_orientation] = useState(90);    
    const [color,setcolor] = useState("#BBB3F8");
    const [color2,setcolor2] = useState("#76F943");
    const targetNode = props.targetNode;
    const sourceNode = props.sourceNode; 
    const weight =props.weight;
  const Arc_data = props.data_array;

  const heading = "How " + sourceNode + "and " + targetNode + " interconnects";

  const Arc_customize = {
    show_heading : show_heading,
        width : width,
        label_size : text_size+"vw",
        label_font : font,
        circle_size : circle_size,
        arc_strength : arc_size,
        color1 : color,
        color2 :color2,
        title_font : font2,
        title_size : title_size+"vw",
        orientation : orientation,
  };

 

    return ( 
        <div className='pr-5 '>            
        <Row>
        <Col lg={1}> </Col>
        <Col lg={3}> 
            <Card >
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
                            <Col>  <Form.Label> Adjust Graph Width </Form.Label> </Col>
                            <Col> 
                                <Form.Range  onChange={(e) => {set_width(e.target.value)}} defaultValue={950} min='400'  max='950' />
                               
                            </Col>
                            </Row>
                            <Row>
                            <Col>  <Form.Label>Adjust Circle Size </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {set_circle_size(e.target.value)}} defaultValue={5} min='2'  max='12' />
                            </Col>
                            </Row>

                            <Row>
                            <Col>  <Form.Label>Adjust Arc Strength </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {set_arc_size(e.target.value)}} defaultValue={25} min='10'  max='50' />
                            </Col>
                            </Row>

                            
                            
                            
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Change the Colors</Accordion.Header>
                            <Accordion.Body>
                                    <Row>
                                        <Form.Label>Color for forward direction  </Form.Label>                                        
                                        <SliderPicker color={color} onChange={(color) => {setcolor(color.hex); }} /> 
                                       
                                    </Row>
                                    {<br></br>} 
                                    <Row>
                                        <Form.Label>Color for backward direction  </Form.Label>                                         
                                        <SliderPicker color={color2} onChange={(color) => {setcolor2(color.hex); }} /> 

                                    </Row>
                        
                                                         
                                    
                                    
                                    
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Modify the Text</Accordion.Header>
                            <Accordion.Body>   
                                    <Row>
                                    <Col>  <Form.Label>Text Size</Form.Label> </Col>
                                    <Col> 
                                       <Form.Range onChange={(e) => {set_text_size(e.target.value)}} step={0.1} defaultValue={1.5} min='1'  max='1.8' />
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col>  <Form.Label>Title Size</Form.Label> </Col>
                                    <Col> 
                                       <Form.Range onChange={(e) => {set_title_size(e.target.value)}} step={0.1} defaultValue={2} min='1'  max='5' />
                                    </Col>
                                    </Row>


                                    <Row>
                                    <Col>  <Form.Label>Text Font Family </Form.Label> </Col>
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
                                    <Col>  <Form.Label>Title Font Family </Form.Label> </Col>
                                    <Col> 
                                    <Form.Select size="sm" onChange={(e) => {set_font2(e.target.value)}}>
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
                                        <option value="90">Vertically</option>
                                        <option value="0">Horizontally</option>
                                        
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
        <Col className="pl-5" lg={8}><ArcChart heading={heading} config={Arc_customize} data={Arc_data} />  </Col>

      </Row>
      <br></br>
      <br></br>
    </div>
  );
};

export default ArcChartView;
