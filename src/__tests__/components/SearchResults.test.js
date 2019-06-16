import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from '../../components/SearchResults/SearchResults';

describe('<SearchResults />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchResults />);
  });

  it('should render without crashing', () => {
    expect(wrapper.find('div.search_results').length).toEqual(1);
  });
});
