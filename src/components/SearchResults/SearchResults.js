import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import Loader from '../Loader/Loader';

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <Loader />;
  }
  return (
    <Container className="search_results">
      <h2>Search Results</h2>
      <Row>
        {results.map(result => (
          <Col xs="12" sm="4" key={result.name} className="search_results__result">
            {result.name}
          </Col>
        ))}
      </Row>
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
