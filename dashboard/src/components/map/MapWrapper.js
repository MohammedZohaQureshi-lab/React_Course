import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import LocationPin from './LocationPin';

const MapWrapper = () => {
    const [places, setPlaces] = useState([])

    const fetchPlaces = async () => {
        // fetch('places.json')
        //     .then((response) => response.json())
        //     .then((data) => setPlaces(data.results))

    }
    const sample = [
        {
            id: 'abcd',
            name: "Rixos The Palm Dubai",
            location: {
                lat: 25.1212,
                lng: 55.1535,
            }
        },
        {
            id: 'efgh',
            name: "Shangri-La Hotel",
            location: {
                lat: 25.2084,
                lng: 55.2719,
            }
        },
        {
            id: 'ijkl',
            name: "Grand Hyatt",
            location: {
                lat: 25.2285,
                lng: 55.3273,
            }
        }
    ]


    useEffect(() => {
        fetchPlaces();
    }, [])

    if (!places || places.length === 0) {
        return null;
    }
    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAF1Fik7SB4ROAKPXcnb2iIEhPgd4WuHtY" }}
                defaultZoom={10}
                defaultCenter={[34.0522, -118.2437]}
            >
                {sample.map((place) => (
                    <LocationPin
                        key={place.id}
                        text={place.name}
                        lat={place.location.lat}
                        lng={place.location.lng}
                    />
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default MapWrapper