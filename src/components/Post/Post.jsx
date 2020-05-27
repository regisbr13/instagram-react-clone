import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [following, setFollowing] = useState(false);
  const [enjoying, setEnjoying] = useState(false);

  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <Link className="user__thumb" to={`/users/${userInfo.id}`}>
              <img src={userInfo.avatar} alt={userInfo.name} />
            </Link>
            <Link className="user__name" to={`/users/${userInfo.id}`}>
              {userInfo.name}
            </Link>
          </div>
          <button
            className="post__context"
            onClick={(e) => setFollowing(!following)}
          >
            <span className={`follow-btn ${following ? "is-following" : null}`}>
              {following ? "Seguindo" : "Seguir"}
            </span>
          </button>
        </header>
      )}
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>
      {userInfo && (
        <nav className="post__controls">
          <button
            className="post__control"
            onClick={(e) => setEnjoying(!enjoying)}
          >
            <i className={enjoying ? "fas fa-heart" : "far fa-heart"}></i>
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                curtido por
                {postInfo.comments.length === 0 ? (
                  <></>
                ) : (
                  <Link to="/">{` ${postInfo.comments[0].name}`}</Link>
                )}
                {enjoying ? " e outras " : " e outra "}
                <Link to="/">
                  {enjoying
                    ? `${postInfo.comments.length} pessoas`
                    : `${postInfo.comments.length - 1} pessoa`}
                </Link>
              </span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
