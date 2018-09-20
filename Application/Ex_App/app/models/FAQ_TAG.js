/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FAQ_TAG', {
    FAQ_TAG_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    TAG_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TAG: {
      type: DataTypes.STRING(20),
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
    tableName: 'FAQ_TAG'
  });
};
