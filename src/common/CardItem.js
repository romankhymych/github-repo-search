import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardItem = ({ header, children }) => {
  return (
    <Card className="mb-4">
      <Card.Header className="d-inline-flex justify-content-center align-items-center">
        {header}
      </Card.Header>
      <Card.Body className="d-inline-flex flex-column justify-content-center align-items-center">
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

CardItem.defaultProps = {
  header: 'Card Item',
};

CardItem.propTypes = {
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.string.isRequired,
};

export default CardItem;
