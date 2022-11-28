import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
import './Maps.scss'
import GoogleLogo from '../../assets/images/googleLogo.png'
export default class Maps extends Component {
  render() {
    return (
      <div className="containerMaps" id="Maps">

        <div style={{display:"flex",alignItems:"center",alignContent:"center", width:"100%",justifyContent: "center", marginBottom:"2rem"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png" width="20%"/>
        </div>
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