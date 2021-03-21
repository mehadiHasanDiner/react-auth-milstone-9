import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Bike from "../../img/Transportation-img/bike.jpg";
import Car from "../../img/Transportation-img/var.jpg";
import Bus from "../../img/Transportation-img/bus.jpg";
import MetroTrain from "../../img/Transportation-img/unnamed.jpg";
import { selectedVehicle } from "../../App";
import { Card, Container, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [vehicleData, setVehicleData] = useContext(selectedVehicle);
  const bike = () => {
    document.getElementById("bike");
    setVehicleData("bike");
  };

  const car = () => {
    document.getElementById("car");
    setVehicleData("car");
  };

  const bus = () => {
    document.getElementById("bus");
    setVehicleData("bus");
  };

  const metro = () => {
    document.getElementById("metro");
    setVehicleData("metro");
  };

  return (
    <div className="imgStyle">
      <Container>
        <Card className="card-style mt-5 p-3" style={{ width: '16rem', height: '16rem', margin: '5px' }}>
        <Link to="destination/bike">
          <img onClick={bike} id="bike" src={Bike} alt="" />
        </Link>{" "}        
          <Card.Title className="mt-3">Bike</Card.Title>{" "}
        </Card> {" "}

        <Card className="card-style mt-5 p-3" style={{ width: '16rem', height: '16rem', margin: '5px' }}>
        <Link to="destination/car">
          <img onClick={car} id="car" src={Car} alt="" />
        </Link>{" "}       
          <Card.Title className="mt-3">Car</Card.Title>{" "} 
        </Card> {" "}

        <Card className="card-style mt-5 p-3" style={{ width: '16rem', height: '16rem', margin: '5px' }}>
        <Link to="destination/bus">
          <img onClick={bus} id="bus" src={Bus} alt="" />
        </Link>{" "}       
          <Card.Title className="mt-3">Bus</Card.Title>{" "}
        </Card> {" "}

        <Card className="card-style mt-5 p-3" style={{ width: '16rem', height: '16rem', margin: '5px' }}>
        <Link to="destination/metrotrain">
          <img onClick={metro} id="metro" src={MetroTrain} alt="" />
        </Link>{" "}       
          <Card.Title className="mt-3">Metro</Card.Title>{" "}
        </Card> {" "}
      </Container>

    </div>
  );
};

export default Home;
