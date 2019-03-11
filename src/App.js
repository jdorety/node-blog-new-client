import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import PostList from "./components/PostList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: []
    };
  }


  getAllUsers() {
    axios
      .get(`https://secret-fjord-76887.herokuapp.com/user`)
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <NavBar {...props} users={this.state.users} />}
        />
        <Route
          path="/"
          exact
          component={PostList}
/>
        <Route path="/user/:userId" 
          exact 
          component={PostList} />
      </div>
    );
  }
}

export default App;
