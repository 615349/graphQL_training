import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

export default function AppContainer({ children, apolloClient }) {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        {children}
      </ApolloProvider>
    </BrowserRouter>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  apolloClient: PropTypes.object.isRequired,
};
