import { render, screen, waitFor } from '@testing-library/react';
import PaymentPage from './PaymentPage';
import React from 'react';

describe('PaymentPage', () => {
    test('displays the total payment message and payment image', async () => {
        const amount = '100';
        const paymentNum = '2';
        const description = 'Sample description';
        const formUrl = '';

        render(
            <PaymentPage
                amount={amount}
                paymentNum={paymentNum}
                description={description}
                formUrl={formUrl}
            />
        );

        const totalPaymentMessage = screen.getByText(`סה"כ לתשלום $${amount} ב ${paymentNum} תשלומים`);
        expect(totalPaymentMessage).toBeInTheDocument();

        await waitFor(() => {
            const paymentImage = screen.getByAltText('Payment');
            expect(paymentImage).toBeInTheDocument();
        });
    });
});
