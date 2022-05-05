var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
var sectoresModel = require('../models/sectoresModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');
const async = require('hbs/lib/async');
const { json } = require('express');


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

router.get('/sectores', async function(req, res, next) {
  let sectores= await sectoresModel.getSectores();

    res.json(sectores);
});

router.post('/contacto', async(req, res)=>{
  const mail= {
    to: 'antod0790@gmail.com',
    subject: 'Contacto web',
    html: `${req.body.nombre} se contactó a través de la web
            y quiere más información a este correo: 
            ${req.body.email} <br> Además, hizo el siguiente
            comentario: ${req.body.mensaje} <br> su tel es: 
            ${req.body.telefono}.`
  }


  //cambiar los datos 
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'mensaje enviado'
  })

})


module.exports = router;