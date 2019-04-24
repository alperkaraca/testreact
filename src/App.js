import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
// import Test from './components/Test';
import NotFound from './components/NotFound';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import './App.css';


const Home = () => {
  return (
    <h3>Home Page</h3>
  )
}

const About = () => {
  return (
    <h3>About Page</h3>
  )
}

class App extends Component {

  render() {

    return (
      <Router>
        <div className="container">
          <Router>
            <Navbar title="User App" />
            <hr />

            <Switch>
              <Route exact path = "/" component={Users} />
              <Route exact path = "/add" component={AddUser} />
              <Route component = {NotFound} />
            </Switch>

          </Router>
        </div>
      </Router>
    );
  }
}
export default App;
