import React from 'react';
import { shallow } from 'enzyme';

import Filter from '../../components/Filter/Filter';

describe('<Filter />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Filter />);
  });

  it('should render without crashing', () => {
    expect(wrapper.find('div.filter').length).toEqual(1);
  });

  it('should render a list of facilities', () => {
    wrapper.setProps({ filters: ['car park', 'gym', 'pool'] });

    expect(wrapper.find('.filter__facilities-dropdown').length).toEqual(1);
    expect(
      wrapper
        .find('.filter__facilities-dropdown')
        .find('option')
        .first()
        .text(),
    ).toEqual('car park');
    expect(
      wrapper
        .find('.filter__facilities-dropdown')
        .find('option')
        .at(1)
        .text(),
    ).toEqual('gym');
    expect(
      wrapper
        .find('.filter__facilities-dropdown')
        .find('option')
        .at(2)
        .text(),
    ).toEqual('pool');
  });
});
