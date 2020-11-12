import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Spinner } from 'react-bootstrap';

import github from '../api/github';
import ErrorAlert from '../common/ErrorAlert';
import RepoDetails from './RepoDetails';

const Repo = ({ match }) => {
  const { params } = match;
  const [repo, setRepo] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRepo = async ({ owner, repo }) => {
    setLoading(true);
    setError('');

    try {
      const response = await github.get(`repos/${owner}/${repo}`);
      setRepo(response.data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(
    () => {
      fetchRepo(params);
    },
    [params],
  );

  return (
    <section>
      <Row className="d-flex justify-content-between mb-4">
        <Col sm="auto" className="pb-2 pb-sm-0">
          <Link to="/" className="text-decoration-none">
            <Button variant="dark" block>
              Back
            </Button>
          </Link>
        </Col>
        <Col sm="auto">
          <Button
            variant="primary"
            onClick={() => fetchRepo(params)}
            disabled={loading}
            block
          >
            Refresh
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>{error && <ErrorAlert>{error}</ErrorAlert>}</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          {loading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Col>
      </Row>
      <Row>
        <Col>{repo && <RepoDetails repo={repo} />}</Col>
      </Row>
    </section>
  );
};

Repo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      owner: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
    }),
  }),
};

export default Repo;
