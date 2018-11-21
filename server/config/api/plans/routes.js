const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/index');

//Users index route ============================
router.get('/', ctrl.plans.index);

//User Show route- show user by ID =============
router.get('/:id', ctrl.plans.show);

//User create route- create new user ===========
// router.post('/signin', ctrl.users.signIn);

//User create route- create new user ===========
router.post('/register', ctrl.plans.create);

//User edit/update route ========================
// router.put('/', ctrl.users.update);

//User destroy route ============================
// router.delete('/:id', ctrl.users.destroy);

module.exports = router;