require('dotenv').config();

process.env.PGHOST = process.env.DB_HOST;
process.env.PGPASSWORD = process.env.DB_PASSWORD;
process.env.PGPORT = parseInt(process.env.DB_PORT || '');
process.env.PGUSERNAME = process.env.DB_USER;
process.env.PGPASSWORD = process.env.DB_PASSWORD;
process.env.PGDATABASE = process.env.DB_NAME;
