import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      {posts.map(post => (
        <Post postInfo={post} userInfo={getUserHandler(post.userId)} key={post.id}></Post>
      ))}
    </section>
  </div>
);

export default Posts;
