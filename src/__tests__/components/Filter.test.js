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

  it('should render a list of facilities', () => {});
});
