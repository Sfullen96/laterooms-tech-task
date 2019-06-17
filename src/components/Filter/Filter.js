import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button } from 'react-bootstrap';

import './Filter.scss';

const Filter = ({ facilities, filter, selectedFilter, clearFilter }) => {
  return (
    <div className="filter">
      <Form.Group as={Form.Row} className="mb-0">
        <Form.Label column sm={2}>
          Filter by Facilities
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            as="select"
            onChange={e => filter(e)}
            value={selectedFilter}
            className="filter__facilities-dropdown"
          >
            <option disabled readOnly value="">
              Please select a facility
            </option>
            {!facilities.length
              ? 'Loading...'
              : facilities.map(facility => (
                  <option key={facility} value={facility}>
                    {facility}
                  </option>
                ))}
          </Form.Control>
        </Col>
        <Col className="text-center" sm={1}>
          <Button
            variant="outline-dark"
            onClick={() => clearFilter()}
            disabled={selectedFilter === ''}
          >
            <i className="fa fa-times" />
          </Button>
        </Col>
      </Form.Group>
    </div>
  );
};

Filter.defaultProps = {
  facilities: [],
  selectedFilter: '',
};
Filter.propTypes = {
  facilities: PropTypes.arrayOf(PropTypes.string),
  filter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string,
};

export default Filter;
