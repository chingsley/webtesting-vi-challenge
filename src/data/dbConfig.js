import knex from 'knex';
import knexConfig from '../../knexfile';

const environment = process.env.DB_ENV || 'development';

const db = knex(knexConfig[environment]);

export default db;
