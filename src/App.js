import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
// import Test from './components/Test';
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';


import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import './App.css';


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
              <Route exact path = "/github" component={Contribute} />
              <Route component = {NotFound} />
            </Switch>

          </Router>
        </div>
      </Router>
    );
  }
}
export default App;
