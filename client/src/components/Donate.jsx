import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleAmountChange = (e) => {
    setSelectedAmount(parseInt(e.target.value));
    setCustomAmount(''); // Clear custom amount if a predefined amount is selected
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0); // Clear selected amount if a custom amount is entered
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSucceeded(false);

    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;
    if (finalAmount <= 0) {
      setError('Please select a valid donation amount.');
      return;
    }

    try {
      // Fetch the client secret from the backend
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalAmount }),
      });

      const data = await response.json();

      // Log the data to ensure we're getting the clientSecret
      console.log('Response from backend:', data);

      if (!data.clientSecret) {
        throw new Error('Missing clientSecret in response');
      }

      // Confirm the payment with the client secret
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        setSucceeded(true);
      }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Select your donation amount</legend>
        <div>
          <label>
            <input
              type="radio"
              value="5"
              checked={selectedAmount === 5}
              onChange={handleAmountChange}
            />
            $5
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="10"
              checked={selectedAmount === 10}
              onChange={handleAmountChange}
            />
            $10
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="20"
              checked={selectedAmount === 20}
              onChange={handleAmountChange}
            />
            $20
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="50"
              checked={selectedAmount === 50}
              onChange={handleAmountChange}
            />
            $50
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="custom"
              checked={!!customAmount}
              onChange={() => setSelectedAmount(0)}
            />
            Custom Amount: 
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount"
            />
          </label>
        </div>
      </fieldset>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements || succeeded}>
        {succeeded ? 'Processing...' : 'Donate'}
      </button>
      {error && <div>{error}</div>}
      {succeeded && <div>Thank you for your donation!</div>}
    </form>
  );
};

export default DonationForm;
