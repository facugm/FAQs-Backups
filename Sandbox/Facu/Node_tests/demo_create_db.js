var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
  host: "10.45.0.87",
  user: "developer",
  password: "nemonemo",
  database: "FAQS_DEV",
  port:3306
});

con.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");

   var sql = "SELECT * FROM FAQ_TAG";

   con.query(sql, function (err, result, fields) {
   if (err) throw err;
   console.log(result);
 });
});


