const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ProductoSchema = new Schema({
    descripcion : String,
    direccion : String,
    precio: Number,
    estado : String,
    idusuario : String,
    idomiciliario : String,
    categoria : {
        type : Schema.Types.ObjectId,
        ref: "Categoria"
    }
});

module.exports = mongoose.model("Producto", ProductoSchema, "producto");