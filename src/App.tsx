import React, { useState } from 'react';
import PaymentForm from './components/PaymentForm';
import PaymentPage from './components/PaymentPage';
import logo from './images/logo.jpg';
import './App.css'

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState('');
  const [paymentNum, setPaymentNum] = useState('');
  const [description, setDescription] = useState('');

  const handlePaymentFormSubmit = (
    amount: string,
    paymentNum: string,
    description: string
  ) => {
    setAmount(amount);
    setPaymentNum(paymentNum);
    setDescription(description);
    setSubmitted(true);
  };

  return (
    <div>
      <img src={logo} alt="Logo" className='logo' />
      {!submitted ? (
        <PaymentForm onSubmit={handlePaymentFormSubmit} />
      ) : (
        <>
          <PaymentForm onSubmit={handlePaymentFormSubmit} />
          <PaymentPage
            amount={amount}
            paymentNum={paymentNum}
            description={description}
            formUrl={''}
          />
        </>
      )}
    </div>
  );
};

export default App;
