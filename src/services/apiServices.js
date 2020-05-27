const baseUrl = "https://5e7d0266a917d70016684219.mockapi.io/api/v1";

const getUsers = async () => await fetch(`${baseUrl}/users/?page=1&limit=15`, { method: "get" });

const getUser = async (id) =>
  await fetch(`${baseUrl}/users/${id}`, { method: "get" });

const getStories = async () =>
  await fetch(`${baseUrl}/stories`, { method: "get" });

const getPosts = async (id) =>
  await fetch(`${baseUrl}/users/${id}/posts`, { method: "get" });

const postUser = async (user) =>
  await fetch(`${baseUrl}/users`, {
    method: "post",
    body: JSON.stringify(user),
  });

const putUser = async (id, user) =>
  await fetch(`${baseUrl}/users/${id}`, { method: "get", body: user });

const deleteUser = async (id) =>
  await fetch(`${baseUrl}/users/${id}`, { method: "delete" });

export default {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
  getStories,
  getPosts,
};
