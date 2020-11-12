import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './common/Header';
import Router from './router';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container as="main">
        <Row as="section" className="justify-content-center">
          <Col lg="9">
            <Router />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
