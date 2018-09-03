var mysql = require('mysql');
var consulta = require('fs');

var BD = mysql.createConnection({
  host: "10.45.0.87",
  port: "3306",
  user: "developer",
  password: "nemonemo",
  database: "FAQS_DEV"
});

// Evento en case de error
BD.on('error', function(err) {
  console.log(err.code);
});

// Exporta la variable como modulo
exports.BD = BD;