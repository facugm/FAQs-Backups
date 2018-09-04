
var express = require('express');
var router  = express.Router();
var url_biblio   = require('url');
var app     = express();
 
// Conexión
var database = require('/home/nemo/Documentos/Nemo_Pasantias/Application/mysql');

//Raíz
app.get('/', function (req, res) {
    res.send('/faqtag (/tag) <br> /faqfile (/article_name) <br> /faqtrel <br> /user');
  });
 
// SELECT ALL FAQ_TAG 
  app.get('/faqtag', function(req, res, err) {
    var sql = "SELECT * FROM FAQ_TAG";
    database.connection.query(sql, function(err, result, fields) {
        if(err) throw res.json(err);
        res.json(result);
    });
});

// SELECT con parámetros FAQ_TAG
app.get('/faqtag/:tag', function(req, res, err) {
    var param   = req.params.tag;
    var sql = "SELECT * FROM FAQ_TAG WHERE TAG = ?";
    database.connection.query(sql,[param], function(err, result, fields) {
        if(err) throw res.json(err);
        res.json(result);
    });
});

// SELECT ALL FAQ_TAG 
app.get('/faqfile', function(req, res, err) {
    var sql = "SELECT * FROM FAQ_FILE";
    database.connection.query(sql, function(err, result, fields) {
        if(err) throw res.json(err);
        res.json(result);
    });
});

// SELECT con parámetros FAQ_FILE
app.get('/faqfile/:a_name', function(req, res, err) {
    var param = req.params.a_name;
    var sql = "SELECT * FROM FAQ_FILE WHERE ARTICLE_NAME = ?";
    database.connection.query(sql,[param], function(err, result, fields) {
        if(err) throw res.json(err);
        res.json(result);
    });
});

// SELECT ALL FILE_TAG_RELATION
app.get('/faqtrel', function(req, res, err) {
    var sql = "SELECT * FROM FILE_TAG_RELATION";
    database.connection.query(sql, function(err, result, fields) {
        if(err) throw res.json(err);
        res.json(result);
    });
});

// SELECT ALL USSER_ACCOUNT
app.get('/user', function(req, res, err) {
    var sql = "SELECT * FROM USER_ACCOUNT";
    database.connection.query(sql, function(err, result, fields) {
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
