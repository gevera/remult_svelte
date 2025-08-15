import { remultApi } from 'remult/remult-sveltekit';
import { PostgresDataProvider } from "remult/postgres"
import { Pool } from 'pg';
import { env } from '$env/dynamic/private';
import { SqlDatabase } from 'remult';
import { Country } from '../shared/Countries';

console.log({ user: env.DB_USER });

const pg = new Pool({
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT) || 5432,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME

})

export const api = remultApi({
    dataProvider: new SqlDatabase(new PostgresDataProvider(pg)),
    entities: [Country]
});
