import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import PropTypes from "prop-types";
import React from "react";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: false
      }}
    />
  ))
);

const MapCard = ({ title, subtitle, avatar, lat, lng, mapHeight }) => (
  <Card>
    <CardHeader avatar={avatar} title={title} subheader={subtitle} />
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: mapHeight }} />}
      mapElement={<div style={{ height: `100%` }} />}
      lat={lat}
      lng={lng}
    />
  </Card>
);

MapCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  avatar: PropTypes.element,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  mapHeight: PropTypes.number.isRequired
};

export default MapCard;
