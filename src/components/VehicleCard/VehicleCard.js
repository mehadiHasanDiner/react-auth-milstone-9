import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, } from "react-bootstrap";
import './VehicleCard.css'


const VehicleCard = (props) => {
    const { image, vehicle_name } = props.vehicle;
    return (
        <div>
            <Container className = "imgStyle">
                <Card className="card-style mt-5 p-3" style={{ width: '16rem', height: '16rem', margin: '10px' }}>
                    <Card.Img variant="top" src={image} alt="" />
                    <Card.Title className ="mt-3">{vehicle_name}</Card.Title>
                </Card>

            </Container>
        </div>
    );
};

export default VehicleCard;