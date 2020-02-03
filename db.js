const Sequelize = require("sequelize");

var db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    define: {
      freezeTableName: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

let models = [require("./models/artists.js"), require("./models/songs.js")];

// Initialize models
models.forEach(model => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

// Apply associations
Object.keys(db).forEach(key => {
  if ("associate" in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
