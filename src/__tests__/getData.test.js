import getData from '../data';
import chai from 'chai';

const { should, expect } = chai;

describe('getData()', () => {
  let data;
  beforeEach(async () => {
    data = await getData();
  });

  it('should return an array', () => {
    expect(data).to.be.a('Array');
  });

  it('should be an array of objects', () => {
    expect(data[0]).to.be.a('Object', 'Data should contain objects');
  });
});
