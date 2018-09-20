/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER_ACCOUNT', {
    USER_ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    USER_PASSWORD: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'USER_ACCOUNT'
  });
};
