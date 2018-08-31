var mysql = require('mysql');
var consulta = require('fs');

var BD = mysql.createConnection({
  host: "10.45.0.87",
  port: "3306",
  user: "developer",
  password: "nemonemo",
  database: "FAQS_DEV"
});

BD.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    BD.query("SELECT ARTICLE_NAME,ARTICLE_TEXT,VISITS,CREATED_AT,UPDATED_AT FROM FAQ_FILE", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


