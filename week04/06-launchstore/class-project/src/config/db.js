const { Pool } = require('pg')

module.exports = new Pool({
  database: 'launchstoredb',
  host: 'localhost',
  password: '',
  port: 5432,
  user: 'italoteix'
});
