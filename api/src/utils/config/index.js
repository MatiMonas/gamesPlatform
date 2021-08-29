//interactuo con el entorno (envoriment)

require('dotenv').config(); //con esto puedo acceder a mis variables de entorno

module.exports = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbServer: process.env.DB_SERVER,
  PORT: process.env.PORT,
};
