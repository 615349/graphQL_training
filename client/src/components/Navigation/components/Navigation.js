import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { Column, Row } from 'react-foundation';
import ExpandableNavigation from './ExpandableNavigation';
import NavigationBar from './NavigationBar';
import '../styles/navigation.css';

export default function Navigation({ location }) {
  return (
    <div className="navigation">
      <Row>
        <Column className="navigation__column">
          <h4>Qantas Cars</h4>
          <MediaQuery key="navigation-bar" minWidth={640}>
            <NavigationBar location={location} />
          </MediaQuery>
          <MediaQuery key="navigation-expandable" maxWidth={639}>
            <ExpandableNavigation />
          </MediaQuery>
        </Column>
      </Row>
    </div>
  );
}

Navigation.propTypes = {
  location: PropTypes.shape({ }).isRequired,
};
