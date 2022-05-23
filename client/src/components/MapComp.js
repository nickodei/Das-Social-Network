import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "60vw",
  height: "80vh"
};

const center = {
  lat: 48.1952,
  lng: 11.592090
};

function MapComp() {
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
        options={{clickableIcons: false}}
      >
        
      </GoogleMap>
    );
  }
}

export default MapComp