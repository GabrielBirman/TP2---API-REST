const userService = require('../services/userService.JS');
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.send(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send('Error al obtener la lista de usuarios');
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = await userService.addUser(req.body);
    res.send(newUser);
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    res.status(500).send('Error al agregar un nuevo usuario');
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (updatedUser) {
      res.send(updatedUser);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).send('Error al actualizar la información del usuario');
  }
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
};