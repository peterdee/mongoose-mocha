const assert = require('assert');

const index = require('..');

describe(
  'Test the Index module',
  () => {
    it(
      'Should connect to the database and find a result',
      async () => {
        const result = await index();
        assert(result);
        assert.equal(result.price, 10);
      },
    );
  },
);
