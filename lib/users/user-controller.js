const { collectAllUsers, createUser, updateUser, deleteUser } = require("./user-repository");
const GeneratePassword = require('../utils/generate-password');

module.exports.getUsers = async (req, res) => {
  try {
    const users = await collectAllUsers();
    res.status(200).send(users.data);
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const newPassword = GeneratePassword.generate(req.body.password);
    const newObjectUser = {
      ...req.body,
      password: newPassword
    };
    const user = await createUser(newObjectUser);
    res.status(201).send(user.data);
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await updateUser(id, body);
    res.status(200).send(user.data);
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteUser(id);
    res.status(200).send('Usuário excluído');
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};