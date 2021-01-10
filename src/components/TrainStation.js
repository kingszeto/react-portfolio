import React from 'react'
import StationDot from './StationDot'
import './TrainStation.css'


function TrainStation(props){
    return (
        <div>
            <StationDot/>
            <div className='Sign'>
                <img src={props.svgpath}></img>
            </div>
        </div>
    )
}

export default TrainStation