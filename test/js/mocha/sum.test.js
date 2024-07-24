const sum = require('../../../src/js/sum');
const chai = require('chai');
const expect = chai.expect;

describe('Sum function', () => {
  it('should add 1 and 2 to make 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});