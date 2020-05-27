import React from "react";

import User from "../../components/User";
import Loading from "../../components/Loading";

import "./UsersList.scss";

const UersList = ({ users }) => {
  return (
    <section className="users-list">
      {users.length === 0 ? (
        <Loading></Loading>
      ) : (
        users.map((user) => (
          <User
            key={user.id}
            infoUser={{
              id: user.id,
              avatar: user.avatar,
              name: user.name,
              username: user.username,
            }}
          ></User>
        ))
      )}
    </section>
  );
};

export default UersList;
