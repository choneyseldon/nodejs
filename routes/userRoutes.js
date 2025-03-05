 const express = require('express');
 const { getuser, getusers, createuser, updateuser, deleteuser } = require('../controllers/userController');

 const router = express.Router();

 router.get('/users', getusers);
 router.get('/users/:id', getuser);
 router.post('/users', createuser);
 router.put('/users/:id', updateuser);
 router.delete('/users/:id', deleteuser);

 module.exports = router;