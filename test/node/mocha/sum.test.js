const { sum } = require('../../../src/node/sum');
const { expect } = require('chai');

describe('Sum function', () => {
  it('should add 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
