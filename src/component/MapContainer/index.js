import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function MapContainer(props) {
  const { latitude, longitude } = props.selectedData;

  const displayMarkers = () => {
    return (
      <Marker
        position={{
          lat: latitude,
          lng: longitude,
        }}
      />
    );
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{
        lat: latitude,
        lng: longitude,
      }}
    >
      {displayMarkers()}
    </Map>
  );
}

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyDBO_SPXRR-OXL3POseNg0hd6zsqkhdoDc",
}))(MapContainer);
