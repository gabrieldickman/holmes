
const express = require('express');
const ixcController = require('./ixcController.js')

const router = express.Router();

router.get("/", ixcController.getClients);

module.exports = router;
