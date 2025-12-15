import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    if (!stripe || !elements) return

    setLoading(true);


return (
    <form onSUbmit={handleSubmit} style={{ width: 400 }}>
        <CardElement />
        <btton disabled={!stripe || loading}>
            {loading ? "Processing..." : "Pay $50"}
        </btton>
        <p>{message}</p>
    </form>
);
}


export default function PaymentForm() {
    return (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
    );
}