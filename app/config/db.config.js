export default {
  HOST: "localhost",
  USER: process.env.DB_USER,
  PASSWORD: null,
  DB: process.env.DB,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
