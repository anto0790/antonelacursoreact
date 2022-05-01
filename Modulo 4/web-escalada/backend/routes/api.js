var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;


router.get('/novedades', async function(req, res, next) {
    let novedades= await novedadesModel.getNovedades();

    novedades = novedades.map(novedad =>{
        if(novedad.img_id){
          const imagen= cloudinary.url(novedad.img_id, {
            width:760,
            height:200,
            crop:'pad'
          });
          return{
            ...novedad,
            imagen
          }
        }
        else{
          return{
            ...novedad,
            imagen: ''
          }
        }
      })
      res.json(novedades);
});

module.exports = router;