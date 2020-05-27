import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiService from "../../services/apiServices";
import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";

const INITIAL_STATE = {
  id: "",
  avatar: "",
  name: "",
  username: "",
  email: "",
};

const ProfileRoute = () => {
  const [user, setUser] = useState(INITIAL_STATE);
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  const get = async (id) => {
    try {
      const user = await (await apiService.getUser(id)).json();
      const posts = await (await apiService.getPosts(id)).json();
      setUser(user);
      setPosts(posts);
      setLoad(false)
    } catch (error) {
      alert("Erro ao carregar as informações do usuário!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      get(id);
    }, 500);
  }, [id]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        username={user.username}
        avatar={user.avatar}
        name={user.name}
      ></UserProfile>
      {load ? (
        <Loading></Loading>
      ) : (
        <UserPosts posts={posts}></UserPosts>
      )}
    </div>
  );
};

export default ProfileRoute;
