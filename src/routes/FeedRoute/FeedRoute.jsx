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

  const getUserFeed = async (id) => {
    try {
      const user = await (await apiService.getUser(id)).json();
      if (user !== "Not found") {
        setUsers((users) => [...users, user]);
        const post = await getUserPosts(id);
        setUsersPosts((usersPosts) => [...usersPosts, post]);
      }
    } catch (error) {
      alert("Erro ao obter usuário!");
    }
  };

  const getUserPosts = async (id) => {
    try {
      const response = await (await apiService.getPosts(id)).json();
      return response;
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
      response.forEach(async (story) => {
        await getUserFeed(story.userId);
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
        users.map((user) =>
          usersPosts.map((posts, index) => (
            <Posts posts={posts} getUserHandler={getUserPost} key={index}></Posts>
          ))
        )
      )}
    </div>
  );
};

export default FeedRoute;
