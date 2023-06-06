import React from 'react';
import logo from './images/logo.jpg';
import PaymentForm from './components/PaymentForm'
import './App.css';

const App: React.FC = () => {

  return (
    <div className="welcome-page">
      <img src={logo} alt="Logo" className="logo" />
      <PaymentForm />
    </div>
  );
};
export default App;