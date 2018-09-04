
// Felixge/node-mysql
var mysql = require('mysql');
 
// Conexion a exportar
var connection = mysql.createConnection({
    host    : "10.45.0.87",
    user    : "developer",
    password: "nemonemo",
    database: "FAQS_DEV",
    port    : 3306
});
 
// Evento en case de error
connection.on('error', function(err) {
    console.log(err.code);
});
 
// Exportar la variable como modulo
exports.connection = connection;
