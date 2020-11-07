import React from 'react';
import { Navbar } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';

const Header = () => {
  return (
    <Navbar as="header" bg="dark" variant="dark" className="mb-4">
      <Navbar.Brand
        href="https://github.com/romankhymych/github-repo-search"
        target="_blank"
        className="d-flex align-items-center"
      >
        <GoMarkGithub className="mr-2" />
        {process.env.REACT_APP_WEBSITE_NAME}
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
