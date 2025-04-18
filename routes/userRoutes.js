const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.upodateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;