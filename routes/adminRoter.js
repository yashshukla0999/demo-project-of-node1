const express =require('express');
const router = express.Router();
const adminData = require('../controller/controls')

router.get('/',adminData.showForm);

router.post('/products',adminData.postUser)

router.get('/products',adminData.showUser)
router.delete('/products/:id',adminData.deleteUser);

module.exports=router;
