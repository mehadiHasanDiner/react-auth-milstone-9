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

function App() {
    
  return (    
    <div>      
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/login">
          <Login></Login>       
          </Route>
        </Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
      </Router>      
    </div>
  );
}

export default App;
