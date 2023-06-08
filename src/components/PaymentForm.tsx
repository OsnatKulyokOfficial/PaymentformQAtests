
import React, { FormEvent, useState } from 'react';
import '../style/PaymentForm.css';

interface PaymentFormProps {
    onSubmit: (amount: string, paymentNum: string, description: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [paymentNum, setPaymentNum] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        onSubmit(amount, paymentNum, description);

        setFullName('');
        setPhone('');
        setEmail('');
        setPaymentNum('');
        setAmount('');
        setDescription('');
    };

    return (
        <div className="container">
            <h2>Payment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="full-name">Full Name:</label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder="Enter Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Sum:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Enter Sum"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="payment-num">Payment Number:</label>
                    <input
                        type="number"
                        id="payment-num"
                        name="payment-num"
                        placeholder="Enter Payment Number"
                        value={paymentNum}
                        onChange={(e) => setPaymentNum(e.target.value)}
                        min="1"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;
