import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { addToCart, removeFromCart } from "../store";
import { Product } from "../models/product";

const Item = ({ item }: { item: Product }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const cart = useSelector((state: any) => state.cart.items);

  function checkIfAdded() {
    if (!isAdded && cart.find((i: Product) => i._id === item._id)) {
      setIsAdded(true);
    }
  }
  checkIfAdded();

  return (
    <Box>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img alt={item.name} width="150px" height="180px" src={item.path} />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        ></Box>
      </Box>

      <Box mt="3px">
        <Typography>{item.name}</Typography>
        <Typography fontWeight="bold">${item.price}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          onClick={() => {
            dispatch(addToCart({ item: { ...item } }));
            setIsAdded(true);
          }}
          sx={{
            backgroundColor: "grey",
            display: isAdded ? "none" : "block",
            color: "black",
          }}
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => {
            dispatch(removeFromCart({ item: { ...item } }));
            setIsAdded(false);
          }}
          sx={{ display: isAdded ? "block" : "none", color: "black" }}
        >
          Remove from Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Item;
