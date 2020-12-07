const Usuario = require("./../modelos/usuario.modelo");

let guardar = (req, res) => {
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        apellido : body.apellido,
        sexo : body.sexo,
        cedula : body.cedula,
        tipoPersona : body.tipoPersona,
        celular : body.celular,
        usuario : body.usuario,
        contrasena : body.contrasena
    });
    usuario.save((err, usuario_nuevo)=>{
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json({
            ok:true,
            usuario_nuevo
        });
    });
}

let modificar = (req, res) => {
    let body = req.body;
    let id = req.params.id;
    
    Usuario.findByIdAndUpdate(id, body, {new :true}, (err, usuario_modificado) => {
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json({
            ok:true,
            usuario_modificado
        });
    })
}

let eliminar = (req, res) => {
    let id = req.params.id;

    Usuario.findByIdAndRemove(id, (err, usuario_eliminado) => {
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json({
            ok:true,
            usuario_eliminado
        });
    })
}

let listar = (req, res) =>{
    Usuario.find({})
    .exec((err, data)=>{
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json(data);
    })
}

let loguear = (req, res) => {
    let body = req.body;
    
    Usuario.findOne(body, (err, usuario_encontrado) => {
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json({
            ok:true,
            usuario_encontrado
        });
    })
}

module.exports = {
    guardar,
    modificar,
    eliminar,
    loguear,
    listar
}
