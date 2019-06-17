import React from 'react';
import { shallow, mount } from 'enzyme';

import Filter from '../../components/Filter/Filter';

describe('<Filter />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Filter clearFilter={jest.fn()} filter={jest.fn()} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.find('div.filter').length).toEqual(1);
  });

  it('should render a list of facilities', () => {
    wrapper.setProps({ facilities: ['car park', 'gym', 'pool'] });

    expect(wrapper.find('.filter__facilities-dropdown').length).toEqual(1);
    expect(
      wrapper
        .find('.filter__facilities-dropdown')
        .find('option')
        .at(1)
        .text(),
    ).toEqual('car park');
    expect(
      wrapper
        .find('.filter__facilities-dropdown')
        .find('option')
        .at(2)
        .text(),
    ).toEqual('gym');
    expect(
      wrapper
        .find('.filter__facilities-dropdown')
        .find('option')
        .at(3)
        .text(),
    ).toEqual('pool');
  });
});

describe('Mounted <Filter />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Filter clearFilter={jest.fn()} filter={jest.fn()} />);
  });

  it('should update the dropdown on change', () => {
    wrapper.setProps({ facilities: ['car park', 'gym', 'pool'], selectedFilter: 'car park' });
    expect(wrapper.find('select').props().value).toEqual('car park');
  });
});
