import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import SearchResults from '../components/SearchResults/SearchResults';
import Filter from '../components/Filter/Filter';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('Container.App').length).toEqual(1);
  });

  it('should contain the <SearchResults /> component', () => {
    expect(wrapper.containsMatchingElement(<SearchResults />)).toEqual(true);
  });

  it('should contain the <Filter /> component', () => {
    expect(wrapper.containsMatchingElement(<Filter />)).toEqual(true);
  });
});
