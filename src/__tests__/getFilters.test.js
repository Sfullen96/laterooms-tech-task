import { getFilters } from '../data';
import chai from 'chai';

chai.use(require('chai-json-schema'));
const { expect } = chai;

describe('getFilters()', () => {
  let data;
  beforeEach(async () => {
    data = await getFilters();
  });

  it('should return an array', () => {
    expect(data).to.be.a('Array');
  });

  it('should be an array of strings', () => {
    expect(data[0]).to.be.a('string', 'Data should comprise of strings');
  });
});
