import React from 'react';
import PropTypes from 'prop-types';
import './styles/page-wrapper.css';

export default function PageWrapper({ title, children }) {
  return [
    <h1 className="page-wrapper__title" key={title}>
      {title}
    </h1>,
    children,
  ];
}

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
