import React from "react";
import './Map.scss'
import GoogleMapReact from 'google-map-react';
import LocationPin from "./LocationPin";
import data from './map.json'
console.log(data)
const Map = ({ location, zoomLevel }) => {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAF1Fik7SB4ROAKPXcnb2iIEhPgd4WuHtY" }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >

                {data.map(item => <LocationPin
                    lat={item.lat}
                    lng={item.lon}
                    text={item.name}
                />)}


            </GoogleMapReact>

            {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAF1Fik7SB4ROAKPXcnb2iIEhPgd4WuHtY" }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                {sample.map((place) => (
                    <LocationPin
                        key={place.id}
                        text={place.name}
                        lat={place.location.lat}
                        lng={place.location.lng}
                    />
                ))}
            </GoogleMapReact> */}
        </div>
    );
}
export default Map;