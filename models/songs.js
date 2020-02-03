/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('songs', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'name'
    },
    album: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'album'
    },
    artistId: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
      field: 'artistID'
    }
  }, {
    tableName: 'songs'
  });
};
