import React, { useState, useEffect } from "react";

import apiService from "../../services/apiServices";
import UsersList from "../../containers/UsersList/UsersList";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  const get = async () => {
    try {
      const response = await (await apiService.getUsers()).json();
      setUsers(response)
    } catch (error) {
      alert("Erro ao carregar usuários!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      get();      
    }, 500);
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users}></UsersList>
    </div>
  );
};

export default UsersRoute;
