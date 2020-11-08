import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { GoRepo, GoStar, GoCode } from 'react-icons/go';
import numeral from 'numeral';

const RepoListItem = ({ repo }) => {
  const { full_name, stargazers_count, language } = repo;

  return (
    <ListGroup.Item>
      <div className="d-flex align-items-center font-weight-bold mb-1">
        <GoRepo className="text-secondary mr-2" />
        <Link to={`/${full_name}`}>{full_name}</Link>
      </div>
      <div className="d-inline-flex small text-secondary">
        <div className="d-flex align-items-center mr-3">
          <GoStar className="mr-1" />
          {numeral(stargazers_count).format('0a')}
        </div>
        <div className="d-flex align-items-center">
          {language && <GoCode className="mr-1" />}
          {language}
        </div>
      </div>
    </ListGroup.Item>
  );
};

RepoListItem.defaultProps = {
  repo: {
    stargazers_count: 0,
    language: '',
  },
};

RepoListItem.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number,
    language: PropTypes.string,
  }),
};

export default RepoListItem;
