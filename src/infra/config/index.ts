import 'dotenv/config';

export type DbConfig = {
  host: string | undefined;
  password: string | undefined;
  port: number | undefined;
  username: string | undefined;
  database: string | undefined;
}

export type Config = {
  db: DbConfig;
}

export const config: Config = {
  db: {
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || ''),
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
  }
}
