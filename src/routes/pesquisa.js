var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

//Recebendo os dados do html e direcionando para a função cadastrar de pesquisaController.js
router.post("/cadastrar", function (req, res) {
    pesquisaController.cadastrar(req, res);
});

module.exports = router;