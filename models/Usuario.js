const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioScheme = new mongoose.Schema({
    nombreUsuario: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true},
    rol: {type: String, required: true}//'admin' o 'user'
})

// Middleware que se ejecutara antes de guardar
// Servira para guardar la contraseña antes de guardarla
usuarioScheme.pre('save', async function (next) {
    if(!this.isModified('contraseña')){
        return next();
    }
    //Esto encripta 10 veces la contraseña haciendolo muy seguro
    const salt = await bcrypt.genSalt(10);
    // hash encripta la contraseña
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
    next();
});
// Exportamos el modelo
module.exports = mongoose.model('Usuario', usuarioScheme);