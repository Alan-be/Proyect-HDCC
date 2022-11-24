import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
import './Maps.scss'
export default class Maps extends Component {
  render() {
    return (
      <div className="containerMaps">
        <GoogleMaps
          apiKey={"AIzaSyC6hpIex4vd4paoVM75aOYYjc4uM4LTrv0"}
          style={{ height: "400px", width: "90%" }}
          zoom={12}
          center={{
            lat: 20.6572,
            lng: -103.42
          }}
          markers={[
            { lat: 20.6572, lng: -103.42 },
            { lat: 20.6572, lng: -103.42 },
            { lat: 20.6572, lng: -103.42 }
          ]}
        />
      </div>
    );
  }
}