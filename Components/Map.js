import React from "react";
import { Fragment } from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 17.4091,
      lng: 78.43947,
    },
    zoom: 18,
  };
  return (
    <Fragment>
      <GoogleMapReact
        bootstrapURLKeys={process.env.GOOGLE_APPLICATION_CREDENTIALS}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </Fragment>
  );
};

export default Map;
