const express = require('express');
const router = express.Router();
const db = require('../models');
const updateFileFile = require('../model/updateFileFile');
const updateFileTags = require('../model/updateFileTags');
const Sequelize = require('sequelize');
var handlebars = require('handlebars');
var extend = require('handlebars-extend-block');

handlebars = extend(handlebars);
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
    titulo: "Landing Page"
  });
});

router.get('/edit/:term', (req, res, next) => {
  res.render('edit_page', {
    titulo: "Editar artículo",
    id: req.params.term
  });
});

router.get('/page/edit/:id', (req, res, next) => {
  var pattern = req.params.id;
  db.FAQ_FILE.findOne({
    attributes: ['ARTICLE_NAME', 'ARTICLE_TEXT'],
    where: {
      FAQ_FILE_ID: pattern
    }
  }).then((response) => {
    db.sequelize.query('SELECT R_FAQ_FILE_ID, ARTICLE_NAME FROM FAQ_FILE_FILE ff INNER JOIN FAQ_FILE fi ON ff.R_FAQ_FILE_ID = fi.FAQ_FILE_ID WHERE L_FAQ_FILE_ID = :key', {
      replacements: {
        key: pattern
      },
      type: db.sequelize.QueryTypes.SELECT
    }).then(rta => {
      db.sequelize.query('SELECT * FROM FAQ_TAG t INNER JOIN FAQ_FILE_TAG ft ON ft.`FAQ_T_ID`= t.`FAQ_TAG_ID` INNER JOIN FAQ_FILE ff ON ff.`FAQ_FILE_ID` = ft.`FAQ_F_ID` WHERE ff.`FAQ_FILE_ID` = :key', {
        replacements: {
          key: pattern
        },
        type: db.sequelize.QueryTypes.SELECT
      }).then(respuesta => {
        var lista = respuesta.map(item => {
          return {
            id: item.FAQ_TAG_ID,
            text: item.TAG_NAME,
            selected: true
          };
        });
        var list = rta.map(item => {
          return {
            id: item.R_FAQ_FILE_ID,
            text: item.ARTICLE_NAME,
            selected: true
          };
        });
        res.json({
          article_id: response.FAQ_FILE_ID,
          article_name: response.ARTICLE_NAME,
          article_text: response.ARTICLE_TEXT,
          tag: lista,
          related: list,
        });
      });
    });
  });
});

router.post('/save', (req, res, next) => {
  var art = req.body;
  var artid = art.id;
  if (artid > 0) {
    db.sequelize.query(
      "UPDATE FAQ_FILE set ARTICLE_NAME = :name, ARTICLE_TEXT = :text where FAQ_FILE_ID = :artid", {
        replacements: {
          name: art.title,
          text: art.art_text,
          artid: artid
        },
        type: db.sequelize.QueryTypes.UPDATE
      }).then(qrsp => {
      updateFileTags.updateFileTags(artid, art.tags);
      updateFileFile.updateFileFile(artid, art.related);
      res.render('message', {
        message: 'Articulo guardado'
      });
    }).catch(err =>
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      })
    );
  } else {
    console.log('insert');
  }
  //db.sequelize.query('SELECT * FROM FAQ_FILE_FILE WHERE id= :key', { replacements: { key: pattern }, type: db.sequelize.QueryTypes.SELECT });
  /*
  res.render('message', {
    message: 'Articulo guardado'
  });
  */
});

router.get('/article/:term', (req, res, next) => {
  var pattern = req.params.term;
  db.FAQ_FILE.findOne({
    attributes: ['FAQ_FILE_ID', 'ARTICLE_NAME', 'ARTICLE_TEXT'],
    where: {
      FAQ_FILE_ID: pattern
    }
  }).then((response) => {
    db.sequelize.query('SELECT R_FAQ_FILE_ID, ARTICLE_NAME FROM FAQ_FILE_FILE ff INNER JOIN FAQ_FILE fi ON ff.R_FAQ_FILE_ID = fi.FAQ_FILE_ID WHERE L_FAQ_FILE_ID = :key', {
      replacements: {
        key: pattern
      },
      type: db.sequelize.QueryTypes.SELECT
    }).then(rta => {
      var list = rta.map(item => {
        return {
          article: item.ARTICLE_NAME,
          id: item.R_FAQ_FILE_ID
        };
      });
      console.log("PATRON", list);
      res.render('article_page', {
        artid: response.FAQ_FILE_ID,
        titulo: response.ARTICLE_NAME,
        texto: response.ARTICLE_TEXT,
        related: list
      });
    });
  });
});

router.get('/search', (req, res, err) => {
  var pattern = req.query.term;
  db.sequelize.query("SELECT f. FAQ_FILE_ID, f. ARTICLE_NAME,f. ARTICLE_TEXT FROM FAQ_TAG t INNER JOIN FAQ_FILE_TAG ft ON ft.`FAQ_T_ID` =  t.`FAQ_TAG_ID` INNER JOIN FAQ_FILE f ON f.`FAQ_FILE_ID` = ft.`FAQ_F_ID` WHERE t.TAG_NAME LIKE :key LIMIT 10", {
    replacements: {
      key: "%" + pattern + "%"
    },
    type: db.sequelize.QueryTypes.SELECT
  }).then((response) => {
    var list = response.map(item => {
      return {
        id: item.FAQ_FILE_ID,
        value: item.ARTICLE_NAME,
        label: item.ARTICLE_NAME
      };
    });
    console.log("PATRON", list);
    res.json(list);
  });
});

router.get('/searchRelated', (req, res, err) => {
  var pattern = req.query.term;
  console.log("PATRON", pattern);
  db.sequelize.query("SELECT FAQ_FILE_ID, ARTICLE_NAME FROM FAQ_FILE WHERE ARTICLE_NAME LIKE :key LIMIT 10", {
    replacements: {
      key: "%" + pattern + "%"
    },
    type: db.sequelize.QueryTypes.SELECT
  }).then((response) => {
    var list = response.map(item => {
      return {
        id: item.FAQ_FILE_ID,
        text: item.ARTICLE_NAME
      };
    });
    res.json(list);
  });
});

router.get('/searchTags', (req, res, err) => {
  var pattern = req.query.term;
  db.sequelize.query("SELECT TAG_NAME, FAQ_TAG_ID FROM FAQ_TAG WHERE TAG_NAME LIKE :key LIMIT 10", {
    replacements: {
      key: "%" + pattern + "%"
    },
    type: db.sequelize.QueryTypes.SELECT
  }).then((response) => {
    var list = response.map(item => {
      return {
        id: item.FAQ_TAG_ID,
        text: item.TAG_NAME
      };
    });
    res.json(list);
  });
});
