import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './common/Header';
import RepoSearch from './features/RepoSearch';
import RepoDetail from './features/RepoDetail';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container as="main">
        <Row as="section" className="justify-content-center">
          <Col lg="9">
            <Router>
              <Switch>
                <Route path="/" exact component={RepoSearch} />
                <Route path="/:owner/:repo" component={RepoDetail} />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
