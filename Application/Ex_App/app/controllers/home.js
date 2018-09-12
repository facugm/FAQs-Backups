const express = require('express');
const router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');

module.exports = (app) => {
  app.use('/', router);
  //app.use('/faqtag',router);

};

/*
router.get('/', (req, res, next) => {

  const USER_ACCOUNT = db.sequelize.define('USER_ACCOUNT', {
    USER_ID: Sequelize.VARCHAR,
    USER_PASSWORD: Sequelize.VARCHAR
  })
  

  USER_ACCOUNT.findAll({
    
    where:{
      USER_PASSWORD: 123456
    }
  }).spread(MyTableRows =>{

    res.json(MyTableRows)
  });
});*/
/*
router.get('/', (req, res, next) => {

  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: "HOLA",
      text: "blabalbdlabdasl",
      articles: articles
    });

});
});
*/
//router.get('/faqtag', (req, res, next) => {

 // db.User.findAll().then((myTableRows) => {
 //res.json(myTableRows)
 //});

   /*
    db.Article.findAll().then((articles) => {
      res.render('index', {
        title: myTableRows,
        articles: articles
      });
    });
    */


/*
router.get('/faqtag/:name', (req, res, next) => {

  var tag_name= req.params.name;

  db.sequelize.query("SELECT * FROM FAQ_TAG WHERE TAG_NAME= ?", {raw: false, replacements: [tag_name]}
).spread(myTableRows => {

   res.json(myTableRows)

  });

});
*/

router.get('/', (req, res, next) => {

    res.render('index', {
      titulo: "BIENVENIDO"
    });

});
