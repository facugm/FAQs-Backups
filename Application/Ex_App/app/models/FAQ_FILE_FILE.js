/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FAQ_FILE_FILE', {
    L_FAQ_FILE_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FAQ_FILE',
        key: 'FAQ_FILE_ID'
      }
    },
    R_FAQ_FILE_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FAQ_FILE',
        key: 'FAQ_FILE_ID'
      }
    }
  }, {
    tableName: 'FAQ_FILE_FILE'
  });
};
