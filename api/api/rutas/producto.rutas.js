const express = require("express");
const {index, guardar, modificar, listar_categoria, eliminar, pendientes, listacep} = require("./../controladores/producto.controlador");

const router = express.Router();

router.get("/producto/:idusuario", index);
router.get("/listacep/:idomiciliario", listacep);
router.get("/pendiente", pendientes);
router.get("/categoria/", listar_categoria);
//router.get("/producto/categoria", listar_categoria);
router.post("/producto", guardar);
router.put("/producto/:id", modificar);
router.delete("/producto/:id", eliminar);

module.exports = router;