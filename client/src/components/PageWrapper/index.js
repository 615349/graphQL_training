import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './page-wrapper.scss';

export default function PageWrapper({ title, children }) {
  return <Fragment>
    <h1 className="page-wrapper__title" key={title}>
      {title}
    </h1>,
    children,
  </Fragment>;
}

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
