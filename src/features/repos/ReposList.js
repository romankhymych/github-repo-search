import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup } from 'react-bootstrap';

import ErrorAlert from '../../common/ErrorAlert';
import ReposListRow from './ReposListRow';

const ReposList = ({ repos, error }) => {
  const renderedList = repos.map(repo => (
    <ReposListRow key={repo.id} repo={repo} />
  ));

  return (
    <Row>
      <Col>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        <ListGroup variant="flush">{renderedList}</ListGroup>
      </Col>
    </Row>
  );
};

ReposList.defaultProps = {
  error: '',
};

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
  error: PropTypes.string,
};

export default ReposList;
