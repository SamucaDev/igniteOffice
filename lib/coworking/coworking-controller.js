const { collectAllCoworking, createCoworking, updateCoworking, deleteCoworking } = require("./coworking-repository");

module.exports.getCoworking = async (req, res) => {
  try {
    const coworking = await collectAllCoworking();
    res.status(200).send(coworking.data);
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};

module.exports.createCoworking = async (req, res) => {
  try {
    const coworking = await createCoworking(req.body);
    res.status(201).send(coworking.data);
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};

module.exports.updateCoworking = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const coworking = await updateCoworking(id, body);
    res.status(200).send(coworking.data);
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};

module.exports.deleteCoworking = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteCoworking(id);
    res.status(200).send('Coworking excluído');
  } catch (error) {
    res.status(500).send('Erro inesperado')
  }
};