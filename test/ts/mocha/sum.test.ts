import { sum } from '../../../src/ts/sum';
import { expect } from 'chai';

describe('Sum function', () => {
  it('should add 1 and 2 to make 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
