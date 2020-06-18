module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: '5432',
  username: 'postgres',
  password: 'secret123',
  database: 'timovies',
  define: {
    timestamps: true,
    underscored: true,
  },
};
