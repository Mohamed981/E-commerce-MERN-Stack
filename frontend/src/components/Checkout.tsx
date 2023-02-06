import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CRUD } from "../api/api";
import { Product } from "../models/product";
import { setCartEmpty } from "../store";
import { Box, CircularProgress } from "@mui/material";

const Checkout = () => {
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();
  const items = useSelector((state: any) => state.cart.items).map((item: Product) => item.name);
  const totalPrice = useSelector((state: any) => state.cart.totalprice);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      CRUD.create("orders", { totalprice: totalPrice, items: items });
      dispatch(setCartEmpty());
      navigate("/");
    }
  };

  useEffect(() => {
    async function getSecret() {
      let secret: string = (
        await CRUD.create("payment", { totalprice: totalPrice })
      ).data;
      setClientSecret(secret);
    }
    getSecret();
    setLoading(false);
  }, [totalPrice]);

  return (
    <Box width="80%" margin="80px auto" paddingTop="20px">
      <form onSubmit={handleSubmit}>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            {/* <PaymentElement /> */}
            <CardElement />
            <button disabled={!stripe}>Submit</button>
          </div>
        )}
      </form>
    </Box>
  );
};

export default Checkout;
