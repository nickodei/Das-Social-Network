import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "400%",
  height: "400vh"
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
        { /* Child components, such as markers, info windows, etc. */}
        <Marker position={{center}}/>
      </GoogleMap>
    );
  }
}

export default MapComp