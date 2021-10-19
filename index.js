const dotenv = require('dotenv');

dotenv.config();

const database = require('./database');
const seeding = require('./seeding');

module.exports = async () => {
  await database.connect();
  await seeding(database);

  const result = await database.Item.findOne({
    name: 'B',
  });

  const idField = '_id';
  console.log('> got result', result[idField]);

  return result;
};
