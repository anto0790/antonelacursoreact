var express = require('express');
var router = express.Router();
var sectoresModel = require('../models/sectoresModel');


router.get('/sectores', async function(req, res, next) {
    let sectores= await sectoresModel.getSectores();

      res.json(sectores);
});

module.exports = router;