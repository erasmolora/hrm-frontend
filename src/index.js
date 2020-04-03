import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendors/global/vendors.bundle.css';
import './assets/css/login-3.css';
import './assets/css/style.bundle.css';


const client = new ApolloClient({
  uri: 'http://0.0.0.0:8000/graphql/',
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({ headers: { Authorization: token ? `JWT ${token}` : '' } });
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
