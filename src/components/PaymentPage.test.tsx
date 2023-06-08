import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentPage from './PaymentPage';
import '@testing-library/jest-dom/extend-expect';

describe('PaymentPage', () => {
    const mockAmount = '100';
    const mockPaymentNum = '2';
    const mockDescription = 'Test payment';
    const mockFormUrl = 'http://example.com/form';
    const mockImageUrl = 'http://example.com/image.jpg';

    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValueOnce({
            json: () => Promise.resolve({ url: mockImageUrl }),
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('renders payment details', () => {
        render(
            <PaymentPage
                amount={mockAmount}
                paymentNum={mockPaymentNum}
                description={mockDescription}
                formUrl={mockFormUrl}
            />
        );

        expect(screen.getByText(`סה"כ לתשלום $${mockAmount} ב ${mockPaymentNum} תשלומים`)).toBeTruthy();
    });

    test('renders image when fetch is successful', async () => {
        render(
            <PaymentPage
                amount={mockAmount}
                paymentNum={mockPaymentNum}
                description={mockDescription}
                formUrl={mockFormUrl}
            />
        );

        expect(await screen.findByAltText('Payment')).toHaveAttribute('src', mockImageUrl);
    });

    test('renders fetch error when fetch fails', async () => {
        global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch image.'));

        render(
            <PaymentPage
                amount={mockAmount}
                paymentNum={mockPaymentNum}
                description={mockDescription}
                formUrl={mockFormUrl}
            />
        );

        expect(await screen.findByText('Failed to fetch image.')).toBeTruthy();
    });
});
