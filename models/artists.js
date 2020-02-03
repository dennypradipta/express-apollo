/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "artists",
    {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: "id"
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name"
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
      tableName: "artists"
    }
  );
};
