import './Map.css'
import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "calc(100% - 40px)",
  height: "calc(100% - 40px)",
  top: "20px",
  left: "20px"
};

const center = {
  lat: 48.1952,
  lng: 11.592090
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC8DeAFoQJQRtWbSMaWlIsfdA6r896GOxw"
  });

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{clickableIcons: false, isFractionalZoomEnabled: true}}
      >
       {/* markers */}
       <Marker
          key={0}
          position={center}
        />
      </GoogleMap>
    );
  }
  
}

export default Map