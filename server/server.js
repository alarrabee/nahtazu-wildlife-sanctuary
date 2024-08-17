require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with your secret key
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the Apollo Server
const startApolloServer = async () => {
  await server.start();

  // Middleware
  app.use(cors({
    origin: ['http://localhost:3000', 'https://nahtazu-test.onrender.com'], // Allow both local development and production frontend
    credentials: true,
  }));
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Apollo middleware for GraphQL
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware,
  }));

  // Static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Stripe payment intent route
  app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
      // Validate amount
      if (!amount || amount <= 0) {
        return res.status(400).send({ error: 'Invalid amount' });
      }

      // Create a payment intent with Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Stripe expects the amount in cents
        currency: 'usd',
      });

      // Send client secret back to client
      res.status(200).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).send({ error: error.message });
    }
  });

  // Start the server after DB connection is established
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();