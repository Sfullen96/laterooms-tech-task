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

  it('should render a tile per result', () => {
    wrapper.setProps({
      results: [
        {
          name: 'hotelone',
          starRating: 4,
          facilities: ['car park'],
        },
        {
          name: 'hoteltwo',
          starRating: 1,
          facilities: ['car park', 'gym'],
        },
        {
          name: 'hotelthree',
          starRating: 3,
          facilities: [],
        },
      ],
    });

    expect(wrapper.find('.search_results__result').length).toEqual(3);
  });

  it('should contain the hotel name', () => {
    wrapper.setProps({
      results: [
        {
          name: 'hotelone',
          starRating: 4,
          facilities: ['car park'],
        },
      ],
    });

    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__name').length,
    ).toEqual(1);
    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__name')
        .text(),
    ).toEqual('hotelone');
  });

  it('should contain the hotel image', () => {
    wrapper.setProps({
      results: [
        {
          name: 'hotelone',
          starRating: 4,
          facilities: ['car park'],
          image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/195/195322802.jpg',
        },
      ],
    });
    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__image').length,
    ).toEqual(1);

    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__image')
        .props().src,
    ).toEqual('https://t-ec.bstatic.com/images/hotel/max1024x768/195/195322802.jpg');
  });

  it('should contain the hotel star rating', () => {
    wrapper.setProps({
      results: [
        {
          name: 'hotelone',
          starRating: 4,
          facilities: ['car park'],
        },
      ],
    });
    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__rating').length,
    ).toEqual(1);

    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__rating.full-star').length,
    ).toEqual(4);
    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__rating.empty-star').length,
    ).toEqual(1);
  });

  it('should list the hotel facilities', () => {
    wrapper.setProps({
      results: [
        {
          name: 'hotelone',
          starRating: 4,
          facilities: ['car park', 'gym'],
        },
      ],
    });
    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__facilities').length,
    ).toEqual(1);
    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__facilities')
        .find('.search_results__facility')
        .first()
        .text(),
    ).toEqual('car park');
    expect(
      wrapper
        .find('.search_results__result')
        .first()
        .find('.search_results__facilities')
        .find('.search_results__facility')
        .at(1)
        .text(),
    ).toEqual('gym');
  });
});
