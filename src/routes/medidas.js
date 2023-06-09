var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/dados/", function (req, res) {
    medidaController.buscardados(req, res);
});


module.exports = router;