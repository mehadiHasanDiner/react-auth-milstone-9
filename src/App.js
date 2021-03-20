import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import SignUp from './components/SignUp/SignUp';

function App() {
    
  return (    
    <div>      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>       
          </Route>
          <Route path="/destination">
          <Destination></Destination>       
          </Route>
          <Route path="/login">
          <Login></Login>       
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        <Route exact path="/">
            <Home></Home>
          </Route>
          </Switch>
      </Router>      
    </div>
  );
}

export default App;
