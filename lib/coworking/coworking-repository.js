const connectDataBase = require('axios').default;
const URL_DATABASE = 'http://localhost:3001';

const collectAllCoworking = async () => {
  return await connectDataBase.get(`${URL_DATABASE}/coworking`)
};

const createCoworking = async (body) => {
  return await connectDataBase.post(`${URL_DATABASE}/coworking`, body);
};

const updateCoworking = async (id, body) => {
  return await connectDataBase.put(`${URL_DATABASE}/coworking/${id}`, body);
};

const deleteCoworking = async (id) => {
  return await connectDataBase.delete(`${URL_DATABASE}/coworking/${id}`);
};


module.exports = {
  collectAllCoworking,
  createCoworking,
  updateCoworking,
  deleteCoworking
}