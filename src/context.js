import React, { Component } from 'react'

const UserContext = React.createContext();

// Provider, Consumer

export class UserProvider extends Component {
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
  render() {
    return (
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;