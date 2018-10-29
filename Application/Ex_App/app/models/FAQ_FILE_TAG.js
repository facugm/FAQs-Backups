/* jshint indent: 2 */



module.exports = function(sequelize, DataTypes) {

  return sequelize.define('FAQ_FILE_TAG', {

    FAQ_F_ID: {

      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FAQ_FILE',
        key: 'FAQ_FILE_ID'

      }

    },

    FAQ_T_ID: {

      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FAQ_TAG',
        key: 'FAQ_TAG_ID'
      }

    }

  }, {
    tableName: 'FAQ_FILE_TAG'
  });

};