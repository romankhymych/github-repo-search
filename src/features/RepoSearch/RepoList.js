import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup } from 'react-bootstrap';

import ErrorAlert from '../../common/ErrorAlert';
import RepoListItem from './RepoListItem';

const RepoList = ({ repos, error }) => {
  const renderedList = repos.map(repo => (
    <RepoListItem key={repo.id} repo={repo} />
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

RepoList.defaultProps = {
  error: '',
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
  error: PropTypes.string,
};

export default RepoList;
