
var express = require('express');
var router  = express.Router();
const url   = require('url');
var app     = express();
 
// Conexión
var database = require('/home/nemo/Documentos/Node_tests/mysql');

app.get('/', function (req, res) {
    res.send('Hola!');
  });
 
// Select
app.get('/select', function(req, res, err) {
    var T_NAME_val  = req.query.tagname;
    var T_TAG_val   = req.query.tagval;
    var T_ID        = req.query.tagid;
    var sql = "SELECT * FROM FAQ_TAG WHERE TAG_NAME = ? AND TAG = ? AND FAQ_TAG_ID = ?";
    database.connection.query(sql,[T_NAME_val, T_TAG_val, T_ID], function(err, result, fields) {
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
