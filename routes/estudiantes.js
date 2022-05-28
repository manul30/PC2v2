var express = require('express');
var router = express.Router();
const bp = require('body-parser')
router.use(bp.json())
router.use(bp.urlencoded({ extended: true }))
var estudiantes = require('../controllers/EstudianteController.js');
router.get('/', estudiantes.list);
router.get('/show/:id', estudiantes.show);
router.get('/create', estudiantes.create);
router.post('/save', estudiantes.save);
// router.get('/edit/:id', estudiante.edit);
// router.post('/update/:id', estudiante.update);
// router.post('/delete/:id', estudiante.delete);
module.exports = router;