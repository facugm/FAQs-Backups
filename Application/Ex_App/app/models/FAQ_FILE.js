/* jshint indent: 2 */



module.exports = function (sequelize, DataTypes) {

  const FAQ_FILE = sequelize.define('FAQ_FILE', {

    FAQ_FILE_ID: {

      type: DataTypes.INTEGER(10).UNSIGNED,

      allowNull: false,

      primaryKey: true

    },

    ARTICLE_NAME: {

      type: DataTypes.STRING(50),

      allowNull: false

    },

    ARTICLE_TEXT: {

      type: DataTypes.TEXT,

      allowNull: false

    },

    VISITS: {

      type: DataTypes.INTEGER(10),

      allowNull: false

    },

    CREATED_AT: {

      type: DataTypes.DATE,

      allowNull: true

    },

    UPDATED_AT: {

      type: DataTypes.DATE,

      allowNull: true

    }

  }, {

      tableName: 'FAQ_FILE'

    });



  return FAQ_FILE;

};