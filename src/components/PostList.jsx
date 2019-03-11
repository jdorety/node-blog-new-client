import React, { Component } from "react";
import axios from "axios";
import "../css/index.css";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  getPosts(id = ``) {
    if (id) {
      axios
        .get(`https://secret-fjord-76887.herokuapp.com/user/${id}/posts`)
        .then(response => this.setState({post: response.data}))
        .cath(err => console.log(err))
    } else {
      axios
        .get(`https://secret-fjord-76887.herokuapp.com/post/`)
        .then(response => this.setState({ posts: response.data }))
        .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    if (this.props.match.params.UserId) {
      const UserId = this.props.match.params.UserId;
      this.getPosts(UserId);
    } else {
      this.getPosts();
    }
  }

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(quote => {
          return <p>{quote.text}</p>;
        })}
      </div>
    );
  }
}
