import getData from '../data';
import chai from 'chai';

const { should, expect } = chai;

describe('getData()', () => {
  it('should return an array', async () => {
    const data = await getData();
    expect(data).to.be.a('Array');
  });
});
