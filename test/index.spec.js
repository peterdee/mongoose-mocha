const { expect } = require('chai');

const index = require('..');

describe(
  'Test the Index module',
  () => {
    it(
      'Should connect to the database and find a result',
      async () => {
        const result = await index();
        expect(!!result).to.equal(true);
        expect(result.price).to.equal(10);
      },
    );
  },
);
