import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, } from "react-bootstrap";
import './VehicleCard.css'
import { Link } from 'react-router-dom';


const VehicleCard = (props) => {
    const { image, vehicle_name, key } = props.vehicle;
    return (
        <div className = "imgStyle">
            <Container>              
                <Card className="card-style mt-5 p-3" style={{ width: '16rem', height: '16rem', margin: '10px' }}>
                    <Card.Img variant="top" src={image} alt="" />
                    <Card.Title className ="mt-3"><Link to = {"/vehicle/"+key} >{vehicle_name}</Link></Card.Title>
                </Card>

            </Container>
        </div>
    );
};

export default VehicleCard;