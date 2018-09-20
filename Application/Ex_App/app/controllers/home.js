const express = require('express');
const router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');

module.exports = (app) => {
  app.use('/', router);

};
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


router.get('/faqtag', (req, res, next) => {

  db.FAQ_FILE.findAll({attributes: ['ARTICLE_NAME'], order: "VISITS" , limit: 5}).then((list_articles) => {
    res.json(list_articles);
});
});



router.get('/', (req, res, next) => {
  res.render('landing_page', {
    titulo: "BIENVENIDO"
  });
});
