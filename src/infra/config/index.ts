import 'dotenv/config';

export type DbConfig = {
  host: string;
  password: string;
  port: number;
  user: string;
  name: string;
}

export const config = {
  db: {
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
  }
}
