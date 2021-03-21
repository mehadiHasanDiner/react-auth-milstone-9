import React from 'react';
import { useParams } from 'react-router';
import vehicleData from '../../data/data.json';
import Map from '../Map/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";


const VehicleSearch = () => {

    const { vehicleName } = useParams();
    const vehiclesType = vehicleData.find(vehicle => vehicle.vehicle_name === vehicleName)
    console.log(vehiclesType);
    return (
        <Container>
            <div class="row">
                <div class="col-4">
                <form  className="mt-4 p-4 from" style={{ backgroundColor: 'skyBlue' }}>             

               <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pick From</Form.Label>
                    <Form.Control type="name" name="name" required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control type="name" name="name" required/>
                </Form.Group>

                <Button variant="primary" type="submit" style ={{width:'100%'}}> Search </Button>
            </form>
                </div>
                <div class="col-8 mt-4">
                <Map></Map>
                </div>
            </div>
            
        </Container>
    );
};

export default VehicleSearch;