import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from "axios"
import '../components/PaymentForm.css'
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}
export default function PaymentForm({individualId,courseId}) {
    const navigate=useNavigate();
    const [success,setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    console.log("Individual " + individualId)
    console.log("course " + courseId)
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log( "Individual" +individualId)
        console.log( "course" +courseId)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if(!error){
            try{
                const {id} = paymentMethod
                const response = await axios.post(`http://localhost:5000/api/courses/individual/${courseId}/payCredit?individualId=${individualId}`,{
                    paymentMethod: id
                })
                console.log(response.status)
                if(response.data.success){
                    console.log("Successful Payment")
                    setSuccess(true)
                }

            } catch(error){
                console.log("Error", error)
            }
        }
		else{
            console.log(error.message)
        }
}
  return (
    <>
    {!success ? 
    <form>
        <fieldset className="FormGroup" >
            <div className="FormRow" >
                <CardElement options={CARD_OPTIONS}/>
            </div>

        </fieldset>
        <button className='pay' onClick={handleSubmit} >Pay</button>
     </form>
    : <div>
        <h2 style={{color: "green"}}> Successful Payment! </h2>
        <Button style={{ width: '80px' , height : '30px' ,marginLeft:'30px',marginTop:'10px', marginRight:'30px'}} onClick={()=> {navigate(`/api/courses/getCourse/${courseId}/CTN`)}}> Proceed </Button>

    </div>
    }
    </>
  )
}
