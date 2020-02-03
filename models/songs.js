/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "songs",
    {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: "id"
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name"
      },
      album: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "album"
      },
      artistID: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        field: "artistID"
      },
      createdAt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "createdAt"
      },
      updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "updatedAt"
      }
    },
    {
      timestamps: false,
      tableName: "songs"
    }
  );
};
