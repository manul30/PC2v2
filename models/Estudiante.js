var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EstudianteSchema = new Schema({
 codigo: {type: String, required: true},
 nombre: {type: String, required: true, max: 20},
 apellidos: {type: String, required: true, max: 25},
 mail: {type: String, required: true},
 celular: {type: Number, required: true},
 carrera: { type: String, required: true }
});
module.exports = mongoose.model('Estudiante', EstudianteSchema);
