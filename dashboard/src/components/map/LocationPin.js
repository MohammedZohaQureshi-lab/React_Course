import React from 'react'
const LocationPin = ({ text }) => {
    return (
        <div className="pin">
            <span className="pin-text">.</span>
            <span className='pin-toggle'>-----{text}-----</span>
        </div>
    )
}

export default LocationPin