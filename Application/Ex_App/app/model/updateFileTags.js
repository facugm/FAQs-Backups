const db = require('../models');

exports.updateFileTags = function (artid, tags) {
  var toids = tags.map(item => parseInt(item.id));
  // console.log(toids);
  db.sequelize.query('SELECT FAQ_F_ID, FAQ_T_ID FROM FAQ_FILE_TAG WHERE FAQ_F_ID = :key', {
    replacements: {
      key: artid
    },
    type: db.sequelize.QueryTypes.SELECT
  }).then(respuesta => {
    var lista = respuesta.map(item => {
      return item.FAQ_T_ID;
    });
    var todel = lista.filter(item => toids.indexOf(item) < 0);
    // var commo = lista.filter(item => toids.indexOf(item) >= 0);
    var toins = toids.filter(item => lista.indexOf(item) < 0);
    // console.log(todel);
    // console.log(commo);
    // console.log(toins);
    if (todel.length > 0) {
      db.sequelize.query('DELETE FROM FAQ_FILE_TAG WHERE FAQ_F_ID = :key and FAQ_T_ID in (:toi)', {
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
        db.sequelize.query('INSERT INTO FAQ_FILE_TAG (FAQ_F_ID, FAQ_T_ID) VALUES (:toi)', {
          replacements: {
            toi: pair
          },
          type: db.sequelize.QueryTypes.INSERT
        });
      });
    }
  });
};
