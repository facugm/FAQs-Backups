/* jshint indent: 2 */



module.exports = function(sequelize, DataTypes) {

  return sequelize.define('FAQ_TAG', {

    FAQ_TAG_ID: {

      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },

    TAG_NAME: {

      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true

    },

    TAG: {

      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true

    }

  }, {

    tableName: 'FAQ_TAG'

  });

};

