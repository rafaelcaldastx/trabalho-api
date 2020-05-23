const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

// controller
const Produtos = require('../controller/Produtos');
const produtosController = new Produtos();

// instancia do router
const router = express.Router();

router.get('/:id', verifyToken, produtosController.get);
router.post('/', verifyToken, produtosController.add);

module.exports = router;