/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const RELATION = sequelize.define('FILE_TAG_RELATION', {
    FILE_TAG_RELATION_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    NAME_RELATION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RELATION: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'FILE_TAG_RELATION'
  });
  return RELATION;
};
