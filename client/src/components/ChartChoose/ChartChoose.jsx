import React from 'react'
import Card from 'react-bootstrap/Card';
import areaImg from '../../assets/graphImages/area.PNG'
import barImg from '../../assets/graphImages/bar.PNG'
import bubbleImg from '../../assets/graphImages/bubble.PNG'
import lineImg from '../../assets/graphImages/line.PNG'
import pieImg from '../../assets/graphImages/pie.PNG'
import polarImg from '../../assets/graphImages/polar.PNG'
import radarImg from '../../assets/graphImages/radar.PNG'
import scatterImg from '../../assets/graphImages/scatter.PNG'

function ChartSet() {
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={areaImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Area</Card.Title>
                </Card.Body>
            </Card>
            </div>
            <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={barImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Bar</Card.Title>
                </Card.Body>
            </Card>
            </div>
            <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={bubbleImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Bubble</Card.Title>
                </Card.Body>
            </Card>
            </div>
            <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={lineImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Line</Card.Title>
                </Card.Body>
            </Card>
            </div>
        </div>
        <div className='row mt-2'>
        <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={pieImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Pie</Card.Title>
                </Card.Body>
            </Card>
            </div>
            <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={polarImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Polar</Card.Title>
                </Card.Body>
            </Card>
            </div>
            <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={radarImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Radar</Card.Title>
                </Card.Body>
            </Card>
            </div>
            <div className='col-3 p-1'>
            <Card style={{ width: '8rem' }} className='m-0'>
                <Card.Img variant="top" src={scatterImg}/>
                <Card.Body className='p-0 text-center'>
                    <Card.Title>Scatter</Card.Title>
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
  );
}

export default ChartSet;