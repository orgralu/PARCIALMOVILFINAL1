const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    nombre : String,
    apellido : String,
    sexo : String,
    cedula: Number,
    tipoPersona : Number,
    celular : String,
    usuario : String,
    contrasena : String
});

module.exports = mongoose.model("Usuario", UsuarioSchema, "usuario");