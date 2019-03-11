import React, { Component } from "react";
import axios from "axios";
import { Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: []
    };
  }

  getAllPosts() {
    axios
      .get(`https://secret-fjord-76887.herokuapp.com/post`)
      .then(response => this.setState({ posts: response.data }))
      .catch(err => console.log(err));
  }

  getAllUsers() {
    axios
      .get(`https://secret-fjord-76887.herokuapp.com/user`)
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllPosts();
    this.getAllUsers();
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <NavBar {...props} users={this.state.users} />} />
      </div>
    );
  }
}

export default App;
