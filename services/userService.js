const User = require('../models/user');

let users = [
  new User(1, 'Juan Pérez', 25, 8.5),
  new User(2, 'María Gómez', 30, 9.2),
];

let nextId = users.length + 1;

const getAllUsers = async () => {
  return users;
};

const addUser = async (userData) => {
  const newUser = new User(nextId++, userData.nombreCompleto, userData.edad, userData.nota);
  users.push(newUser);
  return newUser;
};

const updateUser = async (id, updatedData) => {
  const userId = parseInt(id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedData, id: userId };
    return users[userIndex];
  }
  return null; 
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
};