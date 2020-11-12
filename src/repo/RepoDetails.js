import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck, Col, Image, Row } from 'react-bootstrap';
import {
  GoRepo,
  GoLink,
  GoLaw,
  GoStar,
  GoRepoForked,
  GoIssueOpened,
  GoEye,
  GoDatabase,
  GoWatch,
  GoCloudUpload,
} from 'react-icons/go';
import numeral from 'numeral';
import moment from 'moment';

import Hyperlink from '../common/Hyperlink';
import CardItem from '../common/CardItem';

const RepoDetails = ({ repo }) => {
  const {
    created_at,
    description,
    forks_count,
    homepage,
    html_url,
    license,
    name,
    open_issues_count,
    owner,
    size,
    stargazers_count,
    subscribers_count,
    updated_at,
  } = repo;

  return (
    <React.Fragment>
      <Row className="mt-4 mb-5">
        <Col xs="auto">
          <Image
            src={owner.avatar_url}
            width="100"
            height="100"
            roundedCircle
          />
        </Col>
        <Col>
          <h1
            style={{ fontSize: '1.125em' }}
            className="d-flex align-items-center"
          >
            <GoRepo className="text-secondary mr-2" />
            <Hyperlink href={owner.html_url}>{owner.login}</Hyperlink>
            <span className="text-secondary mx-1">/</span>
            <strong>
              <Hyperlink href={html_url}>{name}</Hyperlink>
            </strong>
          </h1>
          <p className="mb-2">{description}</p>
          {homepage && (
            <div style={{ fontSize: '0.875em' }} className="text-secondary">
              <GoLink className="mr-2" />
              <Hyperlink href={homepage}>{homepage}</Hyperlink>
            </div>
          )}
          {license.name && (
            <div style={{ fontSize: '0.875em' }} className="text-secondary">
              <GoLaw className="mr-2" />
              {license.name}
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <CardItem
              header={
                <React.Fragment>
                  <GoEye className="mr-2 text-secondary" />
                  Watch
                </React.Fragment>
              }
            >
              {numeral(subscribers_count).format('0a')}
            </CardItem>
            <CardItem
              header={
                <React.Fragment>
                  <GoStar className="mr-2 text-secondary" />
                  Star
                </React.Fragment>
              }
            >
              {numeral(stargazers_count).format('0a')}
            </CardItem>
            <CardItem
              header={
                <React.Fragment>
                  <GoRepoForked className="mr-2 text-secondary" />
                  Fork
                </React.Fragment>
              }
            >
              {numeral(forks_count).format('0a')}
            </CardItem>
          </CardDeck>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <CardItem
              header={
                <React.Fragment>
                  <GoIssueOpened className="mr-2 text-secondary" />
                  Issues
                </React.Fragment>
              }
            >
              {numeral(open_issues_count).format('0a')}
            </CardItem>
            <CardItem
              header={
                <React.Fragment>
                  <GoDatabase className="mr-2 text-secondary" />
                  Size
                </React.Fragment>
              }
            >
              {numeral(size).format('0.0 b')}
            </CardItem>
            <CardItem
              header={
                <React.Fragment>
                  <GoWatch className="mr-2 text-secondary" />
                  Created
                </React.Fragment>
              }
            >
              {moment(created_at).format('YYYY-MM-DD')}
            </CardItem>
            <CardItem
              header={
                <React.Fragment>
                  <GoCloudUpload className="mr-2 text-secondary" />
                  Updated
                </React.Fragment>
              }
            >
              {moment(updated_at).fromNow()}
            </CardItem>
          </CardDeck>
        </Col>
      </Row>
    </React.Fragment>
  );
};

RepoDetails.propTypes = {
  repo: PropTypes.shape({
    created_at: PropTypes.string,
    description: PropTypes.string,
    forks_count: PropTypes.number,
    homepage: PropTypes.string,
    html_url: PropTypes.string,
    license: PropTypes.shape({
      name: PropTypes.string,
    }),
    name: PropTypes.string,
    open_issues_count: PropTypes.number,
    owner: PropTypes.shape({
      html_url: PropTypes.string,
      login: PropTypes.string,
    }),
    size: PropTypes.number,
    stargazers_count: PropTypes.number,
    subscribers_count: PropTypes.number,
    updated_at: PropTypes.string,
  }),
};

export default RepoDetails;
