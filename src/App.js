import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/HomePage/index';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/profile';
import Weekwods from './components/Weekwods/weekwods';
import Settings from './components/Profile/Settings/Settings';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import Login from './components/LogIn/Login';
const Links = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </>
);

function App() {
  return (
    <Router>
      
      <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/Login" component={Login}/>
            <Route path="/Profile/Settings" component={Settings}/>
            <Route path="/" exact component={Home}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/WeekWods" component={Weekwods}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
