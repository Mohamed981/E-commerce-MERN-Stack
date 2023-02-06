import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../store";

const Header = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.items);

  function cartClicked() {
    if (cart.length !== 0) {
      dispatch(setIsCartOpen());
      navigate(`/cart`);
    }
  }
  return (
    <Box
    
      display="flex"
      alignItems="center"
      width="100%"
      height="100px"
      sx={{ backgroundColor: "grey" }}
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" },fontSize: '40px'  }}
        >
          Home
        </Typography>
        <Typography
          onClick={() => navigate("/orders")}
          sx={{ "&:hover": { cursor: "pointer"  },fontSize: '40px' }}
        >
          Orders
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton onClick={() => cartClicked()} sx={{ color: "black" }}>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
