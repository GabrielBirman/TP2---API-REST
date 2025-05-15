const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Ruta GET para obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Ruta POST para agregar un nuevo usuario
router.post('/', userController.addUser);

// Ruta PATCH para modificar parcialmente un usuario por su ID
router.patch('/:id', userController.updateUser);

module.exports = router;