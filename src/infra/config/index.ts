import 'dotenv/config';

export type DbConfig = {
  host: string | undefined;
  password: string | undefined;
  port: number | undefined;
  user: string | undefined;
  name: string | undefined;
}

export type Config = {
  db: DbConfig;
}

export const config: Config = {
  db: {
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || ''),
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
  }
}
