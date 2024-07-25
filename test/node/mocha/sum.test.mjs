import { expect } from 'chai';
const { describe, it } = require('mocha');

async function getSum() {
  const { default: sum } = await import('../../../src/node/sum.js');
  return sum;
}

describe('Sum function', () => {
  it('should add 1 and 2 to make 3', async () => {
    const sum = await getSum();
    expect(sum(1, 2)).to.equal(3);
  });
});
