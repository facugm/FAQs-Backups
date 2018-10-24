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

router.get('/', (req, res, next) => {
  res.render('landing_page', {
    titulo: "BIENVENIDO"
  });
});

router.get('/article/:term', (req, res, next) => {
  var pattern = req.params.term;
  db.FAQ_FILE.findOne({attributes: ['ARTICLE_NAME', 'ARTICLE_TEXT'], where: { FAQ_FILE_ID:  pattern }}).then((response)=>{
    console.log("PATRON", pattern);

    res.render('article_page', {
      titulo: response.ARTICLE_NAME,
      texto: response.ARTICLE_TEXT 
    });
  })
  
});

router.get('/search', (req, res, err) => { 

    
  var pattern = req.query.term;
  console.log("PATRON", pattern);
  db.FAQ_FILE.findAll({attributes: ['ARTICLE_NAME', 'FAQ_FILE_ID'], limit: 10, order: ['ARTICLE_NAME'], where: { ARTICLE_NAME:{$like: "%" + pattern + "%" }}}).then((response)=>{
    console.log("PATRON", pattern);
  var list = response.map(function(ele){
  return { id: ele.FAQ_FILE_ID, value: ele.ARTICLE_NAME, label: ele.ARTICLE_NAME };
  })
  res.json(list);
  });});




