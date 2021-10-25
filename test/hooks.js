const { MongoMemoryServer } = require('mongodb-memory-server');

const database = require('../database');
const seeding = require('../seeding');

let mongod = null;

module.exports = {
  mochaHooks: {
    async afterAll() {
      await database.disconnect(true);
      await mongod.stop();
    },
    async beforeAll() {
      mongod = await MongoMemoryServer.create();
      await database.connect(mongod.getUri());
      await seeding(database);
    },
  },
};
