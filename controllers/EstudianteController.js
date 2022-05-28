var mongoose = require('mongoose');
var Estudiante = require("../models/Estudiantes");
var estudianteController = {};

estudianteController.list = function(req, res){
    Estudiante.find({}).exec(function(err, estudiantes){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/estudiante/index', {estudiantes: estudiantes} );
    });    
};

estudianteController.show = function(req, res){
    Estudiante.findOne({_id: req.params.id}).exec(function(err, estudiante){
    if( err ){ console.log('Error: ', err); return; }
        res.render('../views/estudiante/show', {estudiante: estudiante} );
    });
};

estudianteController.create = function(req, res){
    res.render('../views/estudiante/create');
};

estudianteController.save = function(req, res){
    var estudiante = new Estudiante( req.body );    
    estudiante.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        console.log("Successfully created a usuario. :)");
        res.redirect("/estudiante/show/"+estudiante._id);
    });
};


module.exports = estudianteController;