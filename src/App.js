import React, { Component } from 'react';
import Navbar from "./components/Navbar";
// import User from "./components/User";
import Users from "./components/Users";
import './App.css';



class App extends Component {
  state = {
    users : [
      {
        id : 1,
        name : "Alper Karaca",
        salary : "5500",
        department: "Değnekçilik"
      },
      {
        id: 2,
        name : "Mahmut Troklebadelioğlu",
        salary: "Karın Tokluğuna...",
        department : "CEO"
      },
      {
        id: 3,
        name : "Reşat Lombakgil",
        salary: "696969",
        department : "Kaplumbağa Terbiyecisi"
      }
      
    ] 
  }

  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }
  render() {
    
    return (
      <div className="container">
        <Navbar title="User App 2"/>
        <Navbar/>
        <hr/>
        

        {/*<Users users = {this.state.users} />*/}
        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>

      </div>
    );
  }
}
export default App;
