import React, { Component } from 'react'

const UserContext = React.createContext();

// Provider, Consumer
const reducer = (state,action) => {
  switch(action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user =>action.payload !== user.id)
      }
    case "ADD_USER":
      return {
        ...state,
        // users : state.users.push(action.payload)
        users: [...state.users,action.payload] 
      }
    default:
      return state;


  }
}

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : "unique-1",
            name : "Alper Karaca",
            salary : "5500",
            department: "Değnekçilik"
          },
          {
            id: "unique-2",
            name : "Mahmut Troklebadelioğlu",
            salary: "Karın Tokluğuna...",
            department : "CEO"
          },
          {
            id: "unique-3",
            name : "Reşat Lombakgil",
            salary: "696969",
            department : "Kaplumbağa Terbiyecisi"
          }          
        ],
        dispatch :  action => {
          this.setState(state => reducer(state,action));
        }
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