import React, { useState } from "react";

import apiService from "../../services/apiServices";
import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const INITIAL_STATE = {
  name: "",
  username: "",
  email: "",
  avatar: "/images/new-user.png",
};

const UserForm = () => {
  const [user, setUser] = useState(INITIAL_STATE);
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(!user.name.trim() || !user.username.trim() || !user.email.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await apiService.postUser(user);
      setSuccess(true);
    } catch (error) {
      alert("Erro ao persistir informações!");
    }
  };

  return (
    <React.Fragment>
      {success && <SuccessMessage></SuccessMessage>}
      <section className="profile" data-testid="user-profile">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img src={user.avatar} alt="novo usuário"></img>
              </div>
              <p className="user__name">
                {user.name}
                <span>@{user.username}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="post__form" data-testid="user-form">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="post__form__wrapper">
              <label>Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                onChange={handleChange}
                value={user.name}
              ></input>
              <label>Usuário</label>
              <input
                type="text"
                name="username"
                placeholder="Seu nome de usuário"
                onChange={handleChange}
                value={user.username}
              ></input>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="seu_email@email.com"
                onChange={handleChange}
                value={user.email}
              ></input>
              <label>
                Url da Imagem de Perfil (use a url da imagem do Linkedin)
              </label>
              <input
                type="text"
                name="avatar"
                placeholder="http://..."
                onChange={handleChange}
              ></input>
              <button type="submit" disabled={error}>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;
