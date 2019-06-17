import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from '../../components/SearchResults/SearchResults';

describe('<SearchResults />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchResults />);
  });

  it('should render a loader until results are returned', () => {
    wrapper.setProps({ results: [] });
    expect(wrapper.find('Loader').length).toEqual(1);

    wrapper.setProps({
      results: [
        {
          name: 'hotelone',
          starRating: 4,
          facilities: [],
        },
      ],
    });
    expect(wrapper.find('Container.search_results').length).toEqual(1);
  });
});
