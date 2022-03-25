const connectDataBase = require('axios').default;
const URL_DATABASE = 'http://localhost:3001';

const collectAllUsers = async () => {
  return await connectDataBase.get(`${URL_DATABASE}/users`)
};

const createUser = async (body) => {
  return await connectDataBase.post(`${URL_DATABASE}/users`, body);
};

const updateUser = async (id, body) => {
  return await connectDataBase.put(`${URL_DATABASE}/users/${id}`, body);
};

const deleteUser = async (id) => {
  return await connectDataBase.delete(`${URL_DATABASE}/users/${id}`);
};


module.exports = {
  collectAllUsers,
  createUser,
  updateUser,
  deleteUser
}