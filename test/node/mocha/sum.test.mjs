import { describe, it } from 'mocha';
import { expect } from 'chai';
import sum from '../../../src/node/sum.js';  // Adjust the import path as needed

describe('Sum function', () => {
  it('should add 1 and 2 to make 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
