import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Figure } from 'react-bootstrap';

import './SearchResults.scss';

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
            <Figure>
              <Figure.Image
                src={result.image}
                alt={result.name}
                className="search_results__image"
                thumbnail
              />
              <Figure.Caption>
                <p className="search_results__name">{result.name}</p>
                <p className="search_results__rating">{result.starRating}</p>
                {Boolean(result.facilities.length) && (
                  <ul className="search_results__facilities">
                    {result.facilities.map(facility => (
                      <li key={facility} className="search_results__facility">
                        {facility}
                      </li>
                    ))}
                  </ul>
                )}
              </Figure.Caption>
            </Figure>
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
