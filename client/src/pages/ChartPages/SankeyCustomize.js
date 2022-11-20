import React from 'react';
import SankeyChart from '../../components/Chart_Components/SankeyChart';
import {Row, Col,Accordion, Card,Form} from 'react-bootstrap';
import {SliderPicker } from 'react-color';
import { useState } from 'react';


const SankeyChartView = (props) => {    

    const Sankey_data =  props.data_array;
    let nodes =  new Set();
    for (var i = 0; i < Sankey_data.length; i++) {            
        nodes.add( Sankey_data[i][0]);
        nodes.add(Sankey_data[i][1]);
    }
    nodes = Array.from(nodes);
    let color_array = [];
    var color_dict = {};
    let random_color = "#FFF";
    for (var i = 0; i < nodes.length; i++) {           
        random_color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
        color_array.push(random_color);
        color_dict[nodes[i]]= random_color;
    }

    const [show_heading, set_show_heading] = useState(true);    
    const [width,set_width] = useState(1);
    const [height,set_height] = useState(0.7);
    const [arc_size,set_arc_size] = useState(0.7);
    const [opacity,set_opacity] = useState(0.4);
    const [text_size,set_text_size] = useState("1.5");
    const [title_size,set_title_size] = useState("2");
    const [font,set_font] = useState('Raleway');
    const [font2,set_font2] = useState('Raleway');
    const [orientation,set_orientation] = useState(90);    
    const [color,setcolor] = useState(color_dict);

    const targetNode = props.targetNode;
    const sourceNode = props.sourceNode; //////////////////////////////////////////////////////
    const weight =props.weight;
    function handle_color_change(i,color1){
        color_array[nodes.findIndex(rank => rank === i)] = color1;
        let temp = nodes[i] ;
        //console.log(i,color1);
        setcolor({...color, [i] : color1});
        
    }

    //will be sent to chart component for customization purpose
    const Arc_customize = {
        show_heading : show_heading,
        width : width,
        label_size : text_size+"vw",
        label_font : font,
        height : height,
        arc_strength : arc_size,
        color1 : color,
        title_font : font2,
        title_size : title_size+"vw",
        orientation : orientation,
        opacity : opacity,

        
    };




    return ( 
        <div className='pr-5 container '>            
        
       <SankeyChart config={Arc_customize} data={Sankey_data} /> 
        <br></br>
        <br></br>
        
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
                                <Form.Range  onChange={(e) => {set_width(e.target.value)}} step={0.01} defaultValue={1} min='0.5'  max='1' />
                               
                            </Col>
                            </Row>
                            <Row>
                            <Col>  <Form.Label>Adjust Graph Height </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {set_height(e.target.value)}}  step={0.01} defaultValue={0.7} min='0.5'  max='1' />
                            </Col>
                            </Row>

                            <Row>
                            <Col>  <Form.Label>Adjust Line Strength </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {set_arc_size(e.target.value)}} step={0.01} defaultValue={0.7} min='0.1'  max='1' />
                            </Col>
                            </Row>

                            <Row>
                            <Col>  <Form.Label>Adjust Opacity </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {set_opacity(e.target.value)}} step={0.01} defaultValue={0.4} min='0.1'  max='1' />
                            </Col>
                            </Row>

                            
                            
                            
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Change the Colors</Accordion.Header>
                            <Accordion.Body>
                            <Row className="ml-5 pl-5">
                                    {nodes.map((i) =>                                     
                                        <Col sm={6} >
                                    
                                        
                                        <Form.Label>Color for {i} </Form.Label>                                        
                                        <SliderPicker  color={color[i]} onChange={(e) => {                                          
                                            handle_color_change(i,e.hex)}} />     
                                            <br></br>                                   
                                                                     
                                        </Col>
                                    
                                    )}
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
            
                <br></br>
      <br></br>
      <br></br>  
         
      </div>
     );
     
}
 
export default SankeyChartView;

