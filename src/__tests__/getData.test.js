import getData from '../data';
import chai from 'chai';

chai.use(require('chai-json-schema'));
const { should, expect } = chai;

describe('getData()', () => {
  const dataSchema = {
    title: 'data',
    type: 'object',
    required: ['name', 'starRating', 'facilities'],
    properties: {
      name: {
        type: 'string',
      },
      starRating: {
        type: 'number',
      },
      facilities: {
        type: 'array',
        minItems: 1,
        uniqueItems: true,
        items: {
          type: 'string',
        },
      },
    },
  };

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

  it('should contain the correct properties', () => {
    expect(data[0]).to.be.jsonSchema(dataSchema);
  });
});
