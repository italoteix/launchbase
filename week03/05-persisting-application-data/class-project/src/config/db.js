const { Pool } = require('pg');

module.exports = new Pool({
  user: 'italoteix',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'gymmanager'
});
