import { remultApi } from 'remult/remult-sveltekit';
import { PostgresDataProvider } from "remult/postgres"
import { Pool } from 'pg';
import { env } from '$env/dynamic/private';
import { SqlDatabase } from 'remult';
import { Country } from '../shared/Countries';

console.log({ user: env.DB_USER });


console.log('MADE A NEW POOL >>>>>');
const pg = new Pool({
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT) || 5432,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
});
console.log(pg);

console.log('MADE A NEW PG DATA PROVIDER >>>>>');
const sqlDatabase = new PostgresDataProvider(pg);
console.log(sqlDatabase);

console.log('MADE A NEW SQL DATABASE >>>>>');
const dataProvider = new SqlDatabase(sqlDatabase);
console.log(dataProvider);


console.log('EXPORTING REMULT API >>>>>');
export const api = remultApi({
    dataProvider,
    entities: [Country]
});
