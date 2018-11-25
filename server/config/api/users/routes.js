const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/index');

//Users index route ============================
router.get('/', ctrl.users.index);

//User Show route- show user by ID =============
router.get('/:id', ctrl.users.show);

//User create route- create new user ===========
router.post('/signin', ctrl.users.signIn);

//User create route- create new user ===========
router.post('/register', ctrl.users.create);

//User edit/update route ========================
router.put('/', ctrl.users.update);

//User upload avatar image route ========================
// router.put('/uploads', ctrl.users.upload);

//User destroy route ============================
router.delete('/:id', ctrl.users.destroy);

module.exports = router;