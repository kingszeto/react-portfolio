import React from 'react'
import StationDot from './StationDot'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './TrainStation.css'

  
var colors = {
    ' ' : '#000000',
    '0' : '#FCCC0A',
    '1' : '#EE352E',
    '2' : '#EE352E',
    '3' : '#EE352E',
    '4' : '#00933C',
    '5' : '#00933C',
    '6' : '#00933C',
    '7' : '#B933AD',
    '8' : '#00985F',
    '9' : '#0039A6',
    'A' : '#0039A6',
    'B' : '#FF6319',
    'C' : '#0039A6',
    'D' : '#FF6319',
    'E' : '#0039A6',
    'F' : '#FF6319',
    'G' : '#6CBE45',
    'H' : '#009B3A',
    'I' : '#00A1DE',
    'J' : '#996633',
    'K' : '#CE8E00',
    'L' : '#A7A9AC',
    'M' : '#FF6319',
    'N' : '#FCCC0A',
    'O' : '#00933C',
    'P' : '#A626AA',
    'Q' : '#FCCC0A',
    'R' : '#FCCC0A',
    'S' : '#808183',
    'T' : '#6CBE45',
    'U' : '#FF6319',
    'V' : '#996633',
    'W' : '#60269E',
    'X' : '#808183',
    'Y' : '#C60C30',
    'Z' : '#996633'
}

function TrainStation(props){
    return (
        <div>
            <StationDot/>
            <Container>
                <Row className='TrainStation'>
                    <Col xs={8} className="StationName">
                        <strong style={{fontSize: props.textsize}}>{props.exp}</strong> 
                    </Col>
                    <Col xs={4}>
                        <div className = "StationInfo">{
                            props.misc.map((value, index) => {
                                return <div className="StationMark" key={index} style={
                                    {
                                        backgroundColor: colors[value]
                                    }
                                }><strong>{value}</strong></div>
                            })
                        }
                        </div>                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrainStation