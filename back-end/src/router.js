const express = require('express');
const { getClients } = require('./ixcController');
const { getCpf } = require('./clienteController');

const router = express.Router()

router.get('/', getClients)
router.get('/cpf', getCpf)

module.exports = router;