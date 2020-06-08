import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GrrOgIRZ9qN9Lcwcz7fjYsJHyF5BmNeLT0du8RxIPLw7EgFsOB4GxGSJ9h8ZxTHibvO1UNQy2fj8uF3R7IL6hMO00WZK3B48G';

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        /> 
     );
}
 
export default StripeCheckOutButton;