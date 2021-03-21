import React, { useContext, useEffect, useState } from "react";
import "./Destination.css";
import "./Destination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import Bike from "../../vehicles/bikedata.json";
import Car from "../../vehicles/cardata.json";
import Bus from "../../vehicles/busdata.json";
import Metro from "../../vehicles/metrodata.json";
import Vehivles from "../Vehicles/Vehivles";
import { selectedVehicle } from "../../App";
import GoogleMap from "../GoogleMap/GoogleMap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";

const Destination = () => {
  const [vehicleData] = useContext(selectedVehicle);

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    let data;
    if (vehicleData === "bike") {
      data = Bike;
    }
    if (vehicleData === "car") {
      data = Car;
    }

    if (vehicleData === "bus") {
      data = Bus;
    }

    if (vehicleData === "metro") {
      data = Metro;
    }

    setVehicles(data);
  }, [vehicleData]);

  const [handleBtn, setHandleBtn] = useState(false);
  const handleLocationSearchButton = (Event) => {
    Event.preventDefault();
    setHandleBtn(true);
  };
  let searchForm;
  if (handleBtn === true) {
    searchForm = "none";
  }
  if (handleBtn === false) {
    searchForm = "block";
  }

  let searchResult;
  if (handleBtn === true) {
    searchResult = "block";
  }
  if (handleBtn === false) {
    searchResult = "none";
  }
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
  return (
    <div>
      <Container>
        <div class="row">
          <div class="col-sm-6">
            <form className="mt-4 p-4 from" style={{ backgroundColor: 'skyBlue' }}>

            <Form.Group>
                <Form.Label>Pick From</Form.Label>
                <Form.Control type="text"
                id="from"
                name="from"
                onChange={(event) => setFromLocation(event.target.value)}
                 required />{" "}
              </Form.Group>{" "}

              <Form.Group>
                <Form.Label>Pick To</Form.Label>
                <Form.Control  type="text"
                id="to"
                name="to"
                onChange={(event) => setToLocation(event.target.value)} required /> {" "}
              </Form.Group> {" "}

              <Button variant="primary" type="submit" style={{ width: '100%' }} value="Search" onClick={handleLocationSearchButton}> Search </Button> {" "}
            </form> {" "}

            {/*  */}
            <div className="destination-container">
        <div className="search-destination">
          
          <div style={{ display: searchResult }} className="result-destination">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> From:{" "}
              <strong> {fromLocation} </strong>{" "}
            </h3>{" "}
            <h3>
              <FontAwesomeIcon icon={faMapMarkedAlt} /> To:{" "}
              <strong> {toLocation} </strong>{" "}
            </h3>{" "}
            <input className="data" type="date" />
          </div>{" "}
          <div className="vehicle-component" style={{ display: searchResult }}>
            {" "}
            {vehicles &&
              vehicles.map((vehicle) => (
                <Vehivles vehicle={vehicle} key={vehicle.vehicleImg}>
                  {" "}
                </Vehivles>
              ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}

      
          </div>

          <div class="col-sm-6 mt-4">
          <GoogleMap></GoogleMap>
          </div>
        </div>

      </Container>





    </div>
  );
};

export default Destination;
