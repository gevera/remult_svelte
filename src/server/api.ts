import { remultApi } from 'remult/remult-sveltekit';
import { createPostgresDataProvider } from "remult/postgres"
import { env } from '$env/dynamic/private';
import { Country } from '../shared/Countries';

export const api = remultApi({
    dataProvider: createPostgresDataProvider({ connectionString: env.DATABASE_URL }),
    entities: [Country]
});
