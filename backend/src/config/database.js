require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.APP_DB_HOST,
  username: process.env.APP_DB_USER,
  password: process.env.APP_DB_PASS,
  port: process.env.APP_DB_PORT,
  database: process.env.APP_DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
