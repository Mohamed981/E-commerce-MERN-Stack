import { useEffect, useState, FC } from "react";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Product } from "../models/product";
import { CRUD } from "../api/api";
import { Item } from "../components";

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    setProducts((await CRUD.index("products")).data);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box width="80%" margin="80px auto" paddingTop="20px">
      <Typography variant="h3" textAlign="center">
        <b>SHOP</b>
      </Typography>

      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {loading ? (
          <CircularProgress />
        ) : (
          products.map((item: Product) => (
            <Item item={item} key={`${item.name}-${item._id}`} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Home;
