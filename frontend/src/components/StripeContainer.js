import React from 'react'
import {useState} from 'react';
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { margin } from '@mui/system';

const PUBLIC_KEY = "pk_test_51MIsDxJlOGxwN9Vchq0mGggELleQI0wPM5rlVO0cNpH4c6ebJ8cLOLkfnl8ZOhKvKtFYAjYca9wftmkDyiTnBevA00ej3T7LL5"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  const [credit,setCredit]= useState(false);

  const {courseId}=useParams();
  const {individualId}=useParams();

  const handleCredit =  async(e) =>{
    e.preventDefault();
    setCredit(!credit)
  }
  return (
    <form style={{ position:'relative', left:'450px', border:'solid' , width:'350px'}}>
      
        <div style={{marginLeft: '20px' , marginBottom: "20px"}}>
           <h1  > Choose a payment method </h1>
           <Button  style={{ width: '100px' , height : '50px' ,marginLeft:'30px',marginTop:'10px', marginRight:'30px'}}> Wallet </Button>
           <Button style={{ width: '100px' , height : '50px',marginTop:'10px' }} onClick= {handleCredit}> Credit Card </Button>
        </div>
      
      { credit &&
        <Elements stripe={stripeTestPromise} >
          <PaymentForm individualId ={individualId} courseId ={courseId} />
        </Elements>
      }
      
     </form>
 
  )
}
