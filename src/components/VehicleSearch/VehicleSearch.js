import React from 'react';
import { useParams } from 'react-router';
import vehicleData from '../../data/data.json';
import GoogleMap from '../Map/GoogleMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';




const VehicleSearch = () => {
    const { vehicleName } = useParams();
    const vehiclesType = vehicleData.find(vehicle => vehicle.vehicle_name === vehicleName)
    console.log(vehiclesType);
    return (
        <Container>
            <h1>this is VehicleSearch</h1>
            <div class="row">
                <div class="col-4">1 of 2</div>
                <div class="col-8">2 of 2</div>
            </div>
            <GoogleMap></GoogleMap>
        </Container>
    );
};

export default VehicleSearch;