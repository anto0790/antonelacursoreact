var express = require('express');
var router = express.Router();
const async = require('hbs/lib/async');
var sectoresModel = require('../../models/sectoresModel');


/* GET home page. */
router.get('/', async function(req, res, next) {

    var sectores= await sectoresModel.getSectores();

  res.render('admin/sectores', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    sectores
  });
});

router.get('/agregarSectores', (req, res, next)=>{
    res.render('admin/agregarSectores',{
      layout: 'admin/layout'
    })
  })
  
  router.post('/agregarSectores', async (req, res, next)=>{
    try{
      if(req.body.titulo !="" && req.body.cuerpo !=""){
        await sectoresModel.insertSector(req.body);
        res.redirect('/admin/sectores');
      }
      else{
        res.render('admin/agregarSectores',{
          layout: 'admin/layout',
          error: true,
          message: 'Todos los campos son requeridos'
        })
      }
    }
    catch(error){
      console.log(error);
      res.render('admin/agregarSectores',{
        layout: 'admin/layout',
        error: true,
        message: 'No se cargo el sector'
      })
    }
  })

  router.get('/eliminar/:id', async (req,res, next) => {
    var id=req.params.id;
    await sectoresModel.deleteSectoresById(id);
    res.redirect('/admin/sectores');
  })

  router.get('/modificarSector/:id', async(req, res, next)=>{
    var id=req.params.id;
    var sector= await sectoresModel.getSectorById(id);
  
    res.render('admin/modificarSector', {
      layout: 'admin/layout',
      sector
    })
  })
  
     router.post('/modificarSector', async (req, res, next)=>{
       try{
        var obj={
          titulo: req.body.titulo,
          cuerpo: req.body.cuerpo
        };
  
        await sectoresModel.modificarSectorById(obj, req.body.id);
        res.redirect('/admin/sectores');
  
       }
       catch(error){
        console.log(error);
        res.render('admin/modificarSector', {
          layout:'admin/layout',
          error:true,
          message: 'No se modifico el sector'
        })
       }
     })


module.exports = router;