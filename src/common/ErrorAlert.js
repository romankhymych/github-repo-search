import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const ErrorAlert = ({ children }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh, no! You got an error!</Alert.Heading>
      <p>{children}</p>
      <hr />
      <p className="mb-0">
        Common problem is not correct token or lack of it. Please, add or update
        your GitHub token in your project ".env" file. Learn more:{' '}
        <Alert.Link href="https://developer.github.com/v3/#authentication">
          GitHub API token authentication
        </Alert.Link>
      </p>
    </Alert>
  );
};

ErrorAlert.propTypes = { children: PropTypes.string.isRequired };

export default ErrorAlert;
