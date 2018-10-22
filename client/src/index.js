import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import AppContainer from './containers/AppContainer';
import Routes from './routes';
import './styles/main.scss';

const client = new ApolloClient({ uri: 'http://localhost:3001/graphql' });

ReactDOM.render(
  <AppContainer apolloClient={client}>
    <Routes />
  </AppContainer>,
  document.getElementById('root'),
);
