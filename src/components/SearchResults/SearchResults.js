import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Loader from '../Loader/Loader';

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <Loader />;
  }
  return (
    <Container className="search_results">
      <h1>Search Results</h1>
    </Container>
  );
};

SearchResults.defaultProps = {
  results: [],
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      starRating: PropTypes.number.isRequired,
      facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ),
};

export default SearchResults;
