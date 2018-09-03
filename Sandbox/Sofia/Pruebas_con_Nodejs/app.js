var express = require('express');
var app = express();
var router  = express.Router();
// Nuestra conexion 
var database = require('/home/nemo/Nemo_Pasantias/Sandbox/Sofia/Pruebas_con_Nodejs/mysql');

// Select simple
app.get('/select', function(req, res) {
    database.BD.query("SELECT * FROM FAQ_TAG WHERE TAG_NAME= 'Tercera'", function(err, rows, fields) {
        if (err) throw res.json(err);
        res.json(rows);
    });
});

app.listen(3000); //Cambiar el puerto
module.exports = router;
