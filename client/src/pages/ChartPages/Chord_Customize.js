import React from 'react';
import ChordChart from '../../components/Chart_Components/ChordChart';

import {Row, Col,Accordion, Card,Form} from 'react-bootstrap';
import {HuePicker } from 'react-color';
import { useState } from 'react';


const ChordChartView = (props) => {    
    
    //we will get props and will initialize it
    const Chord_data = props.data_array;  //data also will be obtained from props
    const targetNode = props.targetNode;
    const sourceNode = props.sourceNode; //////////////////////////////////////////////////////
    const weight =props.weight;
    const heading = "How "+ targetNode + " and "+sourceNode + " interconnects" ;   //adding heading using props
    //to assign colors for each node, we will use set .. it can skip double entries
        let nodes =  new Set();
        //adding source and destination to set
        for (var i = 0; i < Chord_data.length; i++) {            
            nodes.add( Chord_data[i][0]);
            nodes.add( Chord_data[i][1]);
        }
        //we convert  set into array
        nodes = Array.from(nodes);
        let color_array = [];
        var color_dict = {};
        let random_color = "#FFF";
        //assign color for each node
        for (var i = 0; i < nodes.length; i++) {           
            random_color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
            color_array.push(random_color);
            color_dict[nodes[i]]= random_color;
        }
       


 //here customization features are initalized and will be managed using use state hooks


        const [show_heading, set_show_heading] = useState(true);
        const [width, set_width] = useState(10);
        const [opacity, set_opacity] = useState(0.4);
        const [arc_size, set_arc_size] = useState(204);
        const [text_size, set_text_size] = useState("1.5");
        const [title_size, set_title_size] = useState("2");
        const [font, set_font] = useState('Montserrat');
        const [font2, set_font2] = useState('Raleway');
         //here customization features are initalized and will be managed using use state hooks
        const [color, setcolor] = useState(color_dict);
        const [lineWidth,setLineWidth] = useState(50);
        const [radius,setRadius] = useState(250);

            //when user changes color picker, it will update respective color using use state hooks
        function handle_color_change(i,color1){
            color_array[nodes.findIndex(rank => rank === i)] = color1;
            let temp = nodes[i] ;
            //console.log(i,color1);
            setcolor({...color, [i] : color1});
            
        }

      //  will be sent to chart page 
      const Chord_customize = {
        show_heading: show_heading,
        width: width,
        label_size: text_size + "vw",
        label_font: font,
        opacity: opacity,
        arc_strength: arc_size,
        color1: color,
        title_font: font2,
        title_size: title_size + "vw",
        lineWidth: lineWidth,
        radius : radius,


    };




    return ( 
        <div  className=' pr-5 container'>    
              
        <Row>
        <Col> 
        <br>
        </br>  
        
        <br>
        </br>
        <br>
        </br>  
        <br>
        </br>
        <br>
        </br>
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
                            <Col>  <Form.Label> Adjust Space Width </Form.Label> </Col>
                            <Col> 
                                <Form.Range  onChange={(e) => {set_width(e.target.value)}} defaultValue={10} min='0'  max='40' />
                               
                            </Col>
                            </Row>
                            <Row>
                            <Col>  <Form.Label>Adjust Inside Opacity </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {set_opacity(e.target.value)}} defaultValue={0.4} min='0.2' step="0.01" max='0.9' />
                            </Col>
                            </Row>

                            <Row>
                            <Col>  <Form.Label>Adjust Arc Strength </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {set_arc_size(e.target.value)}} defaultValue={204} min='40'  max='215' />
                            </Col>
                            </Row>

                            <Row>
                            <Col>  <Form.Label>Adjust Outer Circle Width </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {setLineWidth(e.target.value)}} defaultValue={50} min='20'  max='80' />
                            </Col>
                            </Row>
                            <Row>
                            <Col>  <Form.Label>Adjust Outer Circle Radius </Form.Label> </Col>
                            <Col> 
                            <Form.Range  onChange={(e) => {setRadius(e.target.value)}} defaultValue={250} min='200'  max='270' />
                            </Col>
                            </Row>

                            
                            
                            
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Change the Colors</Accordion.Header>
                            <Accordion.Body>
                                    {nodes.map((i) =>                                     
                                    
                                    <Row className="ml-5 pl-5">
                                        
                                        <Form.Label>Color for {i} </Form.Label>                                        
                                        <HuePicker  color={color[i]} onChange={(e) => {                                          
                                            handle_color_change(i,e.hex)}} />     
                                            <br></br>                                   
                                    </Row>                                  
                                    
                                    
                                    )}
                                    

                        
                                                         
                                    
                                    
                                    
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
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Raleway">Raleway</option>
                                        <option value="Roboto">Roboto</option>
                                        <option value="sans-serif">sans-serif</option>
                                        
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
                                    
                                                                   
                                    
                                    
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        </Form>
                       
                </Card.Body>
                </Card>
            
                
         </Col> 
         
        <Col lg={8}><ChordChart heading = {heading} config={Chord_customize} data={Chord_data} />  </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br> 
      </div>
     );

     
}
 
export default ChordChartView;
