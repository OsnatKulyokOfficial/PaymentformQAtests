import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PaymentForm from './PaymentForm';

describe('PaymentForm', () => {
    const onSubmit = jest.fn();

    test('renders form inputs', () => {
        render(<PaymentForm onSubmit={onSubmit} />);

        expect(screen.getByLabelText('Full Name:')).toBeInTheDocument();
        expect(screen.getByLabelText('Email:')).toBeInTheDocument();
        expect(screen.getByLabelText('Phone:')).toBeInTheDocument();
        expect(screen.getByLabelText('Sum:')).toBeInTheDocument();
        expect(screen.getByLabelText('Description:')).toBeInTheDocument();
        expect(screen.getByLabelText('Payment Number:')).toBeInTheDocument();
    });

    test('submits form with entered values', () => {
        render(<PaymentForm onSubmit={onSubmit} />);

        const fullNameInput = screen.getByLabelText('Full Name:') as HTMLInputElement;
        const emailInput = screen.getByLabelText('Email:') as HTMLInputElement;
        const phoneInput = screen.getByLabelText('Phone:') as HTMLInputElement;
        const amountInput = screen.getByLabelText('Sum:') as HTMLInputElement;
        const descriptionInput = screen.getByLabelText('Description:') as HTMLTextAreaElement;
        const paymentNumInput = screen.getByLabelText('Payment Number:') as HTMLInputElement;
        const submitButton = screen.getByText('Submit');

        const formData = {
            fullName: 'John Doe',
            email: 'johndoe@example.com',
            phone: '1234567890',
            amount: '100',
            description: 'Test payment',
            paymentNum: '1',
        };

        fireEvent.change(fullNameInput, { target: { value: formData.fullName } });
        fireEvent.change(emailInput, { target: { value: formData.email } });
        fireEvent.change(phoneInput, { target: { value: formData.phone } });
        fireEvent.change(amountInput, { target: { value: formData.amount } });
        fireEvent.change(descriptionInput, { target: { value: formData.description } });
        fireEvent.change(paymentNumInput, { target: { value: formData.paymentNum } });

        fireEvent.click(submitButton);

        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(
            formData.amount,
            formData.paymentNum,
            formData.description
        );

        // Additional assertions for form reset
        expect(fullNameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(phoneInput.value).toBe('');
        expect(amountInput.value).toBe('');
        expect(descriptionInput.value).toBe('');
        expect(paymentNumInput.value).toBe('');
    });
});
