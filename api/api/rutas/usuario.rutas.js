const express = require("express");
const {guardar, modificar, eliminar, loguear, listar} = require("./../controladores/usuario.controlador");

const router = express.Router();

router.post("/usuario", guardar);
router.put("/usuario/:id", modificar);
router.delete("/usuario/:id", eliminar);
router.get("/listar", listar);
router.post("/loguear", loguear);

module.exports = router;