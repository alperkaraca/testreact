import React, { Component } from 'react';
import Navbar from "./components/Navbar";
// import User from "./components/User";
import Users from "./components/Users";
// import './App.css';



class App extends Component {

  render() {
    
    return (
      <div className="container">
        <Navbar title="User App 2"/>
        <Navbar/>
        <hr/>
        

        {/*<Users users = {this.state.users} />*/}
        <Users />

      </div>
    );
  }
}
export default App;
