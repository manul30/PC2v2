var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EstudianteSchema = new Schema({
    codigo: {type: String, required: true, max: 9},
    nombre: {type: String, required: true, max: 100},
    escala: {type: String, required: true, max: 1},
    promedio: {type: Number, required: true}
});
module.exports = mongoose.model('Estudiante', EstudianteSchema);