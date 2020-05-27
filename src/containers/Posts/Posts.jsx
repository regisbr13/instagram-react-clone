import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      {posts.map((post) => {
        const user = getUserHandler(post.userId);
        return <Post postInfo={post} userInfo={user} key={post.id}></Post>;
      })}
    </section>
  </div>
);

export default Posts;
