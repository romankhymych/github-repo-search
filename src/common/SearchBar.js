import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSubmitHandler, searchTerm, onInputChange, loading }) => {
  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Row>
        <Col>
          <Form.Group controlId="searchBar">
            <FormControl
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={onInputChange}
            />
          </Form.Group>
        </Col>
        <Col sm="auto" className="pb-3">
          <Button
            type="submit"
            variant="dark"
            disabled={!searchTerm || loading}
            block
          >
            {loading ? 'Loading…' : 'Submit'}
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

SearchBar.defaultProps = {
  loading: false,
};

SearchBar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default SearchBar;
