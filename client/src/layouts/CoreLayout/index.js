import { withRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { Column, Row } from 'react-foundation';
import Navigation from '../../components/Navigation/';

function transformPathToClass(pathname) {
  return pathname.replace('/', '')
}

function CoreLayout({ children, location: { pathname } }) {
  return (
    <main className={`page-${transformPathToClass(pathname)}`}>
      <Navigation />
      <Row className="core-layout__row">
        <Column>
          {children}
        </Column>
      </Row>
    </main>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default withRouter(CoreLayout);
