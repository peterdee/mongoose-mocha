const assert = require('assert');

const database = require('../database');

describe(
  'Test the database',
  () => {
    it(
      'Should connect and get some results',
      async () => {
        assert.equal(database.instance.readyState, 1);
        const results = await database.Item.find();
        assert(results.length > 0);
      },
    );
  },
);
