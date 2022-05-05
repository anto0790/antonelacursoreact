const async = require('hbs/lib/async');
var pool= require('./bd');

async function getSectores(){
    var query= 'select * from sectores';
    var rows= await pool.query(query);

    return rows;
}

async function insertSector(obj){
    try{
        var query= 'insert into sectores set ?';
        var rows= await pool.query(query, [obj]);
        return rows;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteSectoresById(id){
    var query= 'delete from sectores where id = ?';
    var  rows= await pool.query(query, [id]);
    return rows;
}

async function getSectorById(id){
    var query= 'select * from sectores where id = ?';
    var rows= await pool.query(query, [id]);
    return rows[0];
}

async function modificarSectorById(obj, id){
    try{
        var query='update sectores set ? where id = ?';
        var rows= await pool.query(query, [obj,id]);
        return rows;
    }
    catch(error){
        throw error;
    }
}

module.exports= {getSectores, insertSector, deleteSectoresById, getSectorById, modificarSectorById};