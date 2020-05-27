import React, { useState, useEffect } from "react";

import apiService from "../../services/apiServices";
import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);

  const getUser = async (id) => {
    try {
      const user = await (await apiService.getUser(id)).json();
      if (user !== "Not found") {
        setUsers((users) => [...users, user]);
      }
    } catch (error) {
      alert("Erro ao obter usuário!");
    }
  };

  const getUserPosts = async (id) => {
    try {
      const response = await (await apiService.getPosts(id)).json();
      if (response !== "Not found") {
        response.userId = id;
        setUsersPosts((usersPosts) => [...usersPosts, response]);
      }
    } catch (error) {
      alert("Erro ao obter posts!");
    }
  };

  const getUserPost = (id) => {
    var user = users.find((user) => user.id === id);
    if (user !== undefined) return user;
  };

  const getStories = async () => {
    try {
      const response = await (await apiService.getStories()).json();
      response.forEach((story) => {
        getUser(story.userId);
        getUserPosts(story.userId);
      });

      setStories(response);
    } catch (error) {
      alert("Erro ao obter usuários!");
    }
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <div data-testid="feed-route">
      <Stories stories={stories} getUserHandler={getUserPost}></Stories>
      {users.length === 0 ? (
        <Loading></Loading>
      ) : (
        usersPosts
          .sort((a, b) => a.userId - b.userId)
          .map((posts, index) => {
            return (
              <Posts
                posts={posts}
                getUserHandler={getUserPost}
                key={index}
              ></Posts>
            );
          })
      )}
    </div>
  );
};

export default FeedRoute;
