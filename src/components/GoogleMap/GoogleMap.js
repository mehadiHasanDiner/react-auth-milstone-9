import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
    max: "100%",
    height: "500px",
    marginLeft: "30px",
    borderRadius: "5px",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.322);",

};

export class MapContainer extends Component {
    render() {
        return ( <
            Map google = { this.props.google }
            zoom = { 14 }
            style = { mapStyles }
            initialCenter = {
                {
                    lat: 23.733348,
                    lng: 90.406707,
                }
            }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCbLtIbb7g5VXDwSzJN_IVD32o_iAOZJyQ",
})(MapContainer);