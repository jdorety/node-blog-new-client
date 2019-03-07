import React from "react";
import SinglePost from "./SinglePost";

export default function ListPosts(props) {
  return (
    <div className="listwrapper">
      {props.posts.map(post => {
        return <SinglePost text={post.text} key={post.id} />;
      })}
    </div>
  );
}
