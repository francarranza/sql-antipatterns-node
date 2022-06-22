import { db } from ".."

export default async (mode: 'truncate' | 'drop') => {

  const tableNames = ['bugs', 'comments_adj'];
  let proms = [];

  if (mode === 'truncate') {
    proms = tableNames.map(table => {
      return db`TRUNCATE ${db(table)} CASCADE;`
    })
  }

  if (mode === 'drop') {
    tableNames.push('migrations');
    proms = tableNames.map(table => {
      return db`DROP TABLE IF EXISTS ${db(table)} CASCADE;`
    });
  }

  await Promise.all(proms);
  console.info('All tables nuked with:', mode);
}
