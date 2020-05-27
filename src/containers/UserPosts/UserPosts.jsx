import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      {posts.length === 0 ? (
        <div className="no-posts">
          <span className="no-posts__content">
            Não há publicações deste usuário
          </span>
          <span className="no-posts__emoji" role="img" aria-label="Emoji Triste">
            😥
          </span>
        </div>
      ) : (
        posts.map((post) => <Post postInfo={post} key={post.id}></Post>)
      )}
    </section>
  </div>
);

export default UserPosts;
