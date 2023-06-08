import React, { useEffect, useState } from 'react';

interface PaymentPageProps {
    amount: string;
    paymentNum: string;
    description: string;
    formUrl: string;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ amount, paymentNum, description, formUrl }) => {
    const [totalPaymentMessage, setTotalPaymentMessage] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [fetchError, setFetchError] = useState('');

    useEffect(() => {
        const message = `סה"כ לתשלום $${amount} ב ${paymentNum} תשלומים`;
        setTotalPaymentMessage(message);

        fetch('http://localhost:3001/image')
            .then(response => response.json())
            .then(data => {
                setImageURL(data.url);
            })
            .catch(error => {
                setFetchError('Failed to fetch image.');
                console.error('Failed to fetch image:', error);
            });
    }, [amount, paymentNum, description, formUrl]);

    return (
        <div className="container">
            <div className="payment-page">
                <h1>Payment Page</h1>
                {totalPaymentMessage && (
                    <div>
                        <p>{totalPaymentMessage}</p>

                        {fetchError ? (
                            <p>{fetchError}</p>
                        ) : (
                            <img src={imageURL} alt="Payment" />
                        )}


                    </div>
                )}
            </div>
        </div>
    );

};

export default PaymentPage;
