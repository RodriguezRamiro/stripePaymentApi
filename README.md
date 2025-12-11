# stripePaymentApi

A working Stripe payment flow:

Frontend (React)

Shows a payment form

Uses Stripe Elements (card input UI)

Sends payment info securely to Stripe

Backend (Node + Express)

Creates a Payment Intent

Confirms the payment

Returns success/failure to the frontend

Stripe Dashboard

You’ll see test payments appear in real time

Server talks to Stripe and returns a clientSecret for the frontend to finish the payment

Frontend build the payment form
    paymentform.jsx