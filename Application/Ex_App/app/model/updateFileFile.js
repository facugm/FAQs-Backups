const db = require('../models');

exports.updateFileFile = function(artid, related) {
    var toids = related.map(item => parseInt(item.id));
    // console.log(toids);
    db.sequelize.query('SELECT L_FAQ_FILE_ID, R_FAQ_FILE_ID FROM FAQ_FILE_FILE WHERE L_FAQ_FILE_ID = :key', {
      replacements: {
        key: artid
      },
      type: db.sequelize.QueryTypes.SELECT
    }).then(respuesta => {
      var lista = respuesta.map(item => {
        return item.R_FAQ_FILE_ID;
      });
      var todel = lista.filter(item => toids.indexOf(item) < 0);
      // var commo = lista.filter(item => toids.indexOf(item) >= 0);
      var toins = toids.filter(item => lista.indexOf(item) < 0);
      // console.log(todel);
      // console.log(commo);
      // console.log(toins);
      if (todel.length > 0) {
        db.sequelize.query('DELETE FROM FAQ_FILE_FILE WHERE L_FAQ_FILE_ID = :key and R_FAQ_FILE_ID in (:toi)', {
          replacements: {
            key: artid,
            toi: todel
          },
          type: db.sequelize.QueryTypes.DELETE
        });
      }
      if (toins.length > 0) {
        var toinspairs = toins.map(it => {
          return [artid, it];
        });
        toinspairs.forEach(pair => {
          db.sequelize.query('INSERT INTO FAQ_FILE_FILE (L_FAQ_FILE_ID, R_FAQ_FILE_ID) VALUES (:toi)', {
            replacements: {
              toi: pair
            },
            type: db.sequelize.QueryTypes.INSERT
          });
        });
      }
    });
  };
