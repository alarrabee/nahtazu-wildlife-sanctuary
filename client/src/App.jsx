import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Donate from './components/Donate';
import usePageTitle from './components/PageTitle';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Initialize Apollo Client
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx'); // Replace with your actual Stripe publishable key




function App() {
  usePageTitle();
  return (
    <>
    <Header />
    <ApolloProvider client={client}>
      <div style={{ background: '#f7f7f7', padding: '20px' }}>
        <Outlet />
      </div>
      
      {/* Wrap the Donate component with Elements provider */}
      <Elements stripe={stripePromise}>
        <Donate />
      </Elements>
      <Footer/>
    </ApolloProvider>
    </>
  );
}

export default App;

