import React from 'react'
import {useState} from 'react';
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { margin } from '@mui/system';
import axios from 'axios';
import {useNavigate} from "react-router";

const PUBLIC_KEY = "pk_test_51MIsDxJlOGxwN9Vchq0mGggELleQI0wPM5rlVO0cNpH4c6ebJ8cLOLkfnl8ZOhKvKtFYAjYca9wftmkDyiTnBevA00ej3T7LL5"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  const navigate=useNavigate();

  const [credit,setCredit]= useState(false);
  const [wallet,setWallet]= useState(false);
  const [balance,setBalance]= useState(null);
  const [price,setPrice]= useState(null);
  const [paymentSuccess,setPaymentSuccess]= useState(false);
  const [paymentFailure,setPaymentFailure]= useState(false);

  const {courseId}=useParams();
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");

  console.log("Individual " + id)
  console.log("course " + courseId)
  const handleCredit =  async(e) =>{
    e.preventDefault();
    setPaymentSuccess(false);
    setPaymentFailure(false);
    setCredit(!credit);
    setWallet(false);
  }
  const handleWallet =  async(e) =>{
    const response = await axios.get(`http://localhost:5000/api/courses/individual/${courseId}/getBalanceAndPrice?individualId=${id}`)
    e.preventDefault();
    setWallet(!wallet);
    setCredit(false);
    setPaymentSuccess(false);
    setPaymentFailure(false);
    setBalance(response.data.individualOldMoney)
    setPrice(response.data.amount)
  }
  const handleWalletPayment = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post(`http://localhost:5000/api/courses/individual/${courseId}/PayWithWallet?individualId=${id}`)
      if(response){
        setPaymentSuccess(true);
        setPaymentFailure(false);
        setWallet(false);
        setCredit(false);
      }
    }
    catch(error){
      setPaymentSuccess(false);
      setPaymentFailure(true);
      setWallet(false);
      setCredit(false);
      console.log("Error", error)
     }

   
  }
  return (
    <div>
    <form style={{ position:'relative', left:'450px', border:'solid' , width:'350px'}}>
      
        <div style={{marginLeft: '20px' , marginBottom: "20px"}}>
           <h1  > Choose a payment method </h1>
           <Button style={{ width: '100px' , height : '50px' ,marginLeft:'30px',marginTop:'10px', marginRight:'30px'}} onClick={handleWallet}> Wallet </Button>
           <Button style={{ width: '100px' , height : '50px',marginTop:'10px' }} onClick={handleCredit}> Credit Card </Button>
        </div>
      
      { credit &&
        <Elements stripe={stripeTestPromise} >
          <PaymentForm
           individualId ={id} 
           courseId ={courseId} />
        </Elements>
      }
    { wallet &&
          <div>
            <br></br>
             <h3> Price: {price} </h3>
             <br></br>
             <h3> Your Wallet Balance: {balance}</h3>
             <Button style={{ width: '80px' , height : '30px',marginTop:'10px' }} onClick={handleWalletPayment}> Pay now </Button>
             <br></br>
          </div>
    }
    { paymentSuccess &&
          <div>
             <h4 style={{color: "green"}}> Successful Payment! </h4>
             <Button style={{ width: '80px' , height : '30px' ,marginLeft:'30px',marginTop:'10px', marginRight:'30px'}} onClick={()=> {navigate(`/api/courses/getCourse/${courseId}/ITN/${id}`)}}> Proceed </Button>
          </div>
    }
      { paymentFailure &&
          <div>
             <h4 style={{color: "green"}}> Not Enough Balance!</h4>
          </div>
    }
     </form>
     </div>
  )
}
