const express = require('express');
const router = express.Router();
const db = require('../models');
//const Sequelize = require('sequelize');
//const sequelize = new Sequelize('mysql://developer:nemonemo@10.45.0.87:3306/FAQS_DEV');

module.exports = (app) => {
  app.use('/', router);
  app.use('/faqtag',router);
};

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: 'Welcome',
      articles: articles
    });
  });
});

router.get('/faqtag', (req, res, next) => {
  /*const User = db.sequelize.define('USER_ACCOUNT',{
    user_id : db.Sequelize.STRING,
    user_password : db.Sequelize.STRING
  })*/
  
  var param   = req.params.tag;
  db.sequelize.query("SELECT * FROM FAQ_TAG"
  ).spread(myTableRows => {
    res.json(myTableRows)
  });

  /*User.findAll().spread(resultado => {
    res.json(resultado)
  })*/
});
