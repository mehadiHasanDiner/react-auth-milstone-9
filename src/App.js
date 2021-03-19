import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import VehicleCard from './components/Header/VehicleCard/VehicleCard';
import vehicleData from './data/data.json';


function App() {
  const first4 = vehicleData.slice(0, 4);
  const [vehicles, setVehicles] = useState(first4);
    useEffect(() =>{
        setVehicles(first4);
        console.log(first4);
    }, [first4])
    
  return (
    <div>
      <Header></Header>
      {
        vehicles.map(vehicles =><VehicleCard vehicle ={vehicles}></VehicleCard>)
      }

    </div>
  );
}

export default App;
