
import React, { FormEvent, useState } from 'react';
import '../style/PaymentForm.css';

const App: React.FC = () => {
    // State variables for form inputs and payment form URL
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [paymentNum, setPaymentNum] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [paymentFormUrl, setPaymentFormUrl] = useState('');

    // Form submission handler
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Construct the form data object
        const formData = {
            fullName,
            phone,
            email,
            paymentNum,
            amount,
            description,
        };

        try {
            // Make a POST request to create the payment process
            const response = await fetch('https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(), // Convert form data to URL-encoded format
            });

            if (response.ok) {
                // Retrieve the payment form URL from the response
                const { formUrl } = await response.json();
                setPaymentFormUrl(formUrl); // Set the payment form URL in the state
            } else {
                console.error('Failed to create payment process.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h2>Payment </h2>
            <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-group">
                    <label htmlFor="full-name">Full Name:</label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder='Enter Full Name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Phone */}
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder='Enter Phone number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                {/* Amount */}
                <div className="form-group">
                    <label htmlFor="amount">Sum:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder='Enter Sum'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                        required
                    />
                </div>

                {/* Description */}
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder='Enter Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                {/* Payment Number */}
                <div className="form-group">
                    <label htmlFor="payment-num">Payment Number:</label>
                    <input
                        type="number"
                        id="payment-num"
                        name="payment-num"
                        placeholder='Enter Payment Number'
                        value={paymentNum}
                        onChange={(e) => setPaymentNum(e.target.value)}
                        min="1"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>

            {/* Display the payment form in an iframe */}
            {paymentFormUrl && (
                <div id="payment-form-container">
                    <iframe src={paymentFormUrl} width="100%" height="600px" title="Payment Form"></iframe>
                </div>
            )}
        </div>
    );
};

export default App;
