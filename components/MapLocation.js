import GoogleMapReact from 'google-map-react';
import React from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapLocation(){
  const defaultProps = {
    center: {
      lat: 21.42352075704777,
      
      lng: 39.82422364368855
    },
    zoom: 7
  };

  return (
    <div className=''>
    <h1 className='font-bold text-4xl text-center p-2 text-yellow-600 uppercase font-roboto underline'> Our Location</h1>
    <div className='m-auto p-2' style={{ height: '80vh', width: '80%' }}>
    {/* <h2 className='text-2xl font-bold text-center m-4'>Our Location</h2> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </div>
  );
}