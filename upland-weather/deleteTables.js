const knex = require('knex')({
 client: 'pg',
 connection: {
 host: 'pg.cse.taylor.edu',
 user: 'jerrod_anderson',
 password: 'yiniluxu',
 database: 'jerrod_anderson'
 }
});


knex.schema.dropTable('Ride');
