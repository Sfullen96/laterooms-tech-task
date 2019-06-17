import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import SearchResults from '../components/SearchResults/SearchResults';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('div.App').length).toEqual(1);
  });

  it('should contain the <SearchResults /> component', () => {
    expect(wrapper.containsMatchingElement(<SearchResults />)).toEqual(true);
  });
});
