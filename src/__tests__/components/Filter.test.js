import React from 'react';
import { shallow } from 'enzyme';

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

  it('should do something', () => {
    wrapper.setProps({ facilities: ['car park', 'gym', 'pool'] });

    wrapper
      .find('.filter__facilities-dropdown')
      .simulate('change', { target: { value: 'car park' } });
    console.log(wrapper.find('.filter__facilities-dropdown').props());
    expect(wrapper.find('.filter__facilities-dropdown').props().value).toEqual('car park');
  });
});
