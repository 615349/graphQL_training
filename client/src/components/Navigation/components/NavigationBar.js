import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NAV_LINKS from '../constants/navLinks';
import '../styles/navigation-bar.css';

export default function NavigationBar({ location }) {
  return (
    <nav className="navigation-bar">
      {NAV_LINKS.map((link) => {
        if (location.pathname === link.url) {
          return <p key={link.url}>{link.display}</p>;
        }

        return <Link key={link.url} to={link.url}>{link.display}</Link>;
      })}
    </nav>
  );
}

NavigationBar.propTypes = {
  location: PropTypes.shape({ }).isRequired,
};
