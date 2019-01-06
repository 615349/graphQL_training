import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import './styles/main.scss';

const client = new ApolloClient({ uri: 'http://localhost:3001/graphql' });

ReactDOM.render(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
  document.getElementById('root'),
);
