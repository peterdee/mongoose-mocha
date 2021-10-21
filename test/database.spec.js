const { expect } = require('chai');

const database = require('../database');

describe(
  'Test the database',
  () => {
    it(
      'Should connect and get some results',
      async () => {
        expect(database.instance.readyState).to.equal(1);
        const results = await database.Item.find();
        expect(results.length > 0).to.equal(true);
      },
    );
  },
);
