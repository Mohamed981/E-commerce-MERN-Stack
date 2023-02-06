import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../components/Checkout';

const stripePromise = loadStripe('pk_test_51MY96kFvaR2nOHK8SXJQwbOF0SYfOUcaVNf0TgjUeWRWF2KgJUVVEQcddEPhxeKYJrbUgx4b5tkqCh4A0rQpz9g100wuQpPBAh');

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}

export default CheckoutPage