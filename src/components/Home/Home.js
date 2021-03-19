import React from 'react';
import { useEffect, useState } from 'react';
import vehicleData from '../../data/data.json';
import VehicleCard from '../../components/VehicleCard/VehicleCard';
import './Home.css';


const Home = () => {
    const first4 = vehicleData.slice(0, 4);
    const [vehicles, setVehicles] = useState(first4);
      useEffect(() =>{
          setVehicles(first4);
          console.log(first4);
      }, [first4])
      
    return (
        <div>
          {vehicles.length}
          {
          vehicles.map(vehiclesName =><VehicleCard vehicle ={vehiclesName}></VehicleCard>)
        }
        </div>
    );
};

export default Home;