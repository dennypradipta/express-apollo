/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artists', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    }
  }, {
    tableName: 'artists'
  });
};
