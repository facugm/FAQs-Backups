
var express = require('express');
var router  = express.Router();
const url   = require('url');
var app     = express();
 
// Conexión
var database = require('/home/nemo/Documentos/Nemo_Pasantias/Application/mysql');

app.get('/', function (req, res) {
    res.send('Hola!');
  });
 
// Select
app.get('/select', function(req, res, err) {
    var T_TAG_val   = req.query.tag;
    var sql = "SELECT * FROM FAQ_TAG WHERE TAG = ?";
    database.connection.query(sql,[T_TAG_val], function(err, result, fields) {
        if(err) throw res.json(err);
        res.json(result);
    });
});
 
/*Update 
router.get('/update', function(req, res) {
    database.connection.query('SELECT nombre, apellido FROM usuarios WHERE id = ? AND doc = ?', ['id_val', 'doc_val'], function(err, result) {
        res.json(result);
    });
});*/
 
module.exports = router;
app.listen(3000);
