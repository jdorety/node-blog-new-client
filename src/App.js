import React, { Component } from "react";
import axios from "axios";
import ListPosts from "./components/ListPosts";
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
        <ListPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
