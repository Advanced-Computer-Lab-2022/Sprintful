import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
const PUBLIC_KEY = "pk_test_51MIsDxJlOGxwN9Vchq0mGggELleQI0wPM5rlVO0cNpH4c6ebJ8cLOLkfnl8ZOhKvKtFYAjYca9wftmkDyiTnBevA00ej3T7LL5"
const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise} >
        <PaymentForm/>
    </Elements>
  )
}
